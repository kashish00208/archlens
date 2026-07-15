const fetchFaqs = async () => {
  try {
    const owner = "repo-owner";
    const repo = "repo-name";
    const ref = "main";
    const url = `https://api.github.com/repos/${owner}/${repo}/git/trees/${ref}?recursive=1`; // git tree API

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch folders");
    }

    const contents = await response.json();

    const mdxFiles = contents.tree.filter((item) => // filter for mdx files
      item.path.endsWith(".mdx")
    );
    
    // optional - only if you require faq's of a specific folder in repo
    const mdxFilesInSubfolder = mdxFiles.filter( // filter for mdx files in subfolders (faq or faq-virtual-labs)
      (item) =>
        item.path.startsWith(folderPath + "/") &&
        item.path.endsWith(".mdx")
    );
    mdxFilesInSubfolder.sort((a, b) => { // sort mdx files in subfolders by question number
      const nameA = a.path;
      const nameB = b.path;
      
      const [, numberA] = nameA.match(/Q(\d+)/);
      const [, numberB] = nameB.match(/Q(\d+)/);
      
      return Number(numberA) - Number(numberB);
    });
    const fetchMdxFileContent = async (downloadUrl:string) => { // fetch mdx file content
      const response = await fetch(downloadUrl);
    
      if (!response.ok) {
        throw new Error("Failed to fetch file content");
      }
    
      const contents = await response.text();
    
      const contentRegex =
        /^---\s*title:\s*(.*?)\s*(?:excerpt:\s*(.*?))?\s*---\s*(.*)$/s; // regex to extract title, excerpt and content from mdx file
    
      const match = contents.match(contentRegex);
      const title = match[1].trim();
      const excerpt = match[2] ? match[2].trim() : "";
      const content = match[3].trim();
      return { // return object with title, content
        title,
        content,
      };
    };
    const mdxFileContents = await Promise.all( // fetch mdx file content for each mdx file in subfolder
      mdxFilesInSubfolder.map(async (mdxFile) => {
        const downloadUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${ref}/${mdxFile.path}`; // download url for mdx file
        const { title, content } = await fetchMdxFileContent(downloadUrl); // function to fetch mdx content

        return {
          title: title,
          content: content,
        };
      })
    );
    // final faqs are now in "mdxFileContents.flat()"
  } catch (error) {
    console.error(error);
  }
};

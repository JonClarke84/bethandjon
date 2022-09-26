import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const sectionsDirectory = path.join(process.cwd(), 'sections');

export function getSortedSections() {
  // Get file names under /sections
  const fileNames = fs.readdirSync(sectionsDirectory);
  const allSections = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(sectionsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult,
    };
  })
  
  // Sort sections by order
  return allSections.sort((a, b) => {
    return a.order - b.order
  })
}

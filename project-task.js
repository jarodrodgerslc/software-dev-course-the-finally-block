function processFile(fileName, fileData) {
  try {
    if (typeof fileName !== 'string' || fileName.trim() ===''|| typeof fileData !== 'string' || fileData.trim() ===''){
      throw new Error("File name and file data must be a string and both should not be empty.")
    } 
    else{
    console.log(`Processing file: ${fileName}`);
    console.log(`File content: ${fileData}`);
    }
    
  } catch (err) {
    console.error(err.message);
  } finally {
    console.log(`Finished processing ${fileName}`);
  }
} 

processFile(); // ❌ ReferenceError: File name is missing
processFile("testFile.txt", 42); // ❌ TypeError: File data must be a string
processFile("anotherTestFile.txt", ""); // ❌ Error: File data cannot be empty
processFile("myFile.txt", "Hello, world!"); // ✅ Should process successfully

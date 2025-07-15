// you have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for examples,  these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf
// 4. harry.zip
// 5. rohan.zip
// 6. cat.jpg

//this:
// jpg/name.jpg , jpg/cat.jpg
// pdf/this.pdf
// png/name.png
// zip/harry.zip, zip/rohan.zip

// const fs = require("fs")
// const path = require("path");
// const clutterFolder = "C:\\Users\\ragha\\OneDrive\\Desktop\\webdev course\\video91\\clutterfolder"
// const Filelist = []
// const Filelist2 = []
// const folders = "C:\\Users\\ragha\\OneDrive\\Desktop\\webdev course\\video91\\"

// //to get the extension names of the file
// const files = fs.readdirSync(clutterFolder);
// files.forEach(file => {
//     Filelist.push((path.extname(file)).slice(1));
//     Filelist2.push(path.extname(file));
// });

// // console.log(Filelist)

// const filename = [...new Set(Filelist)];
// const filename2 = [...new Set(Filelist2)];

// console.log(filename)
// try{
// for (let i=0;i<filename.length;i++) {
//     if (path.dirname(`C:\\Users\\ragha\\OneDrive\\Desktop\\webdev course\\video91\\${filename[i]}`) != true) {
        
//         fs.mkdirSync(`C:\\Users\\ragha\\OneDrive\\Desktop\\webdev course\\video91\\${filename[i]}`)

//     }
// }
// }
// catch (err) {
//     console.error('✔️ file exist');
// }

// const allfiiles = fs.readdirSync(clutterFolder);

// // console.log('Items in folder:');
// // allfiiles.forEach(item => {
// //     console.log(item);
// // });
// for(let a=0;a<filename.length;i++){
// const filteredFiles = allfiiles.filter(file => {
//         return path.extname(file) === filename2[a];
//     });

//     let sourcepath = path.join(clutterFolder,filteredFiles)
//     let destinationpath = path.join("C:\\Users\\ragha\\OneDrive\\Desktop\\webdev course\\video91\\",filename[a])
// if (allfiiles.some(item => item.includes(filename2[a]))) {
//     fs.renameSync(sourcepath,destinationpath);
// }
// }

const fs = require("fs");
const path = require("path");

const clutterFolder = "C:\\Users\\ragha\\OneDrive\\Desktop\\webdev course\\video91\\clutterfolder";
const destinationBase = "C:\\Users\\ragha\\OneDrive\\Desktop\\webdev course\\video91";

// Step 1: Get all files
const files = fs.readdirSync(clutterFolder);

// Step 2: Extract unique extensions
const extensions = [...new Set(files.map(file => path.extname(file).slice(1)))]; // no dot

// Step 3: Create folders if they don't exist
extensions.forEach(ext => {
    const folderPath = path.join(destinationBase, ext);
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
        console.log(`Created folder: ${folderPath}`);
    }
});

// Step 4: Move files into respective folders
files.forEach(file => {
    const ext = path.extname(file).slice(1); // e.g. 'jpg'
    const sourcePath = path.join(clutterFolder, file);
    const destPath = path.join(destinationBase, ext, file);

    try {
        fs.renameSync(sourcePath, destPath);
        console.log(`Moved: ${file} -> ${ext}/`);
    } catch (err) {
        console.error(`❌ Failed to move ${file}:`, err.message);
    }
});

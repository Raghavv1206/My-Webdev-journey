export default function Page({ params }) {
    // throw new error("error") // made for error so that error.js can be displayed
    // fetch your blog post by its slug
    let languages = ["python", "javascript", "java", "cpp" , "cs"]
if(languages.includes(params.slug)){
    return <div>My Post: {params.slug} </div>
    
}
else{
    return <div> page not found </div>
}
return <div>My Post: {params.slug} </div>
}


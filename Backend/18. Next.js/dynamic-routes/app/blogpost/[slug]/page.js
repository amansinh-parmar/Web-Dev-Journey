
import NotFound from "@/app/not-found";
export default function Page({ params }) {
    console.log(params)
    // throw new Error('OOPS, THIS IS SERIOUS ERROR!')

    // fetch your blog post by its slug
    const languages =  ['python', 'javascript', "java", 'ruby', 'swift']

    const slug = params.slug
    if(languages.includes(slug)){
        return <div>MY POST : {slug}</div>
    }
    return NotFound()
}

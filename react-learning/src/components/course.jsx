
function Course({title, description,image}) {
   // const title = props.title
   // const description = props.description
   // const {title, description} = props
    return (  
        <>
        <div className=" bg-orange-300">
            <div className=" border border-gray-950">
                <img className="mx-auto h-48 w-full" src={image}/>
                <div className="h-44 mt-14">
                    <div className="sm:text-2xl text-xl font-extrabold">{title}</div>
                    <div className="sm:text-xl text-lg font-bold sm:font-bold">{description}</div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Course;
//모듈
import Banner from "../components/banner/Banner"
import Main from "../components/main/Main"

export default function HomePage({data}) {
    return (
        <>
            <Banner blog={data.blog} />
            <Main data={data}/>
        </>
    )
};
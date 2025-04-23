import { useParams } from "react-router-dom";

const SearchPage = () => {
    const params = useParams<{query: string}>();

    return (
    <div>SearchPage, params: {params.query}</div>
    )
}

export default SearchPage
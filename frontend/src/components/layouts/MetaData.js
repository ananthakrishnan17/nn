import { Helmet } from "react-helmet-async";

export default function MetaData({ title }) {
    return (
        <Helmet>
            {/* Use backticks for string interpolation */}
            <title>{`${title} - NammaNanban`}</title>
        </Helmet>
    );
}

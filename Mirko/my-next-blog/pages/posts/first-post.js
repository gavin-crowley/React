




function FirstPostPage(props) {
    console.log("[FirstPostPage] render:", props);
    return (
        <h1>First Post Page</h1>
    )
}

export default FirstPostPage


export async function getStaticProps() {
    return {
        props: {
            prop1: 'value1',
            prop2: 'value2',
        }
    }
}
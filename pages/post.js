class Post extends React.Component {
  static async getInitialProps({ query }) {
    console.log('SLUG', query.slug);
    return {};
  }
  render() {
    return <h1>Welcom to Next.js</h1>;
  }
}

export default Post;

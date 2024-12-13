import PostsTable from "../componenets/PostsPage/ShowPosts/PostsTable";

export default function PostsPage() {
  return (
    <>
      <div className="container">
        <h1 className="mt-5">Lista dei Post</h1>
        <PostsTable />
        <div className="p-3"></div>
      </div>
    </>
  );
}

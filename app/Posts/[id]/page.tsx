async function getPost(noteId: string) {
    const res = await fetch(
      `http://127.0.0.1:8090/api/collections/posts/records/${noteId}`,
      {
        next: { revalidate: 10 },
      }
    );
    const data = await res.json();
    return data;
  }
  
  export default async function NotePage({ params }: any) {
    const note = await getPost(params.id);
  
    return (
      <div>
        <h1>notes/{note.id}</h1>
        <div>
          <h3>{note.name}</h3>
          <h5>{note.updated}</h5>
          <p>{note.created}</p>
        </div>
      </div>
    );
  }
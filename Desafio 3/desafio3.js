async function imprimirDetallesDePublicacion(postId) {
    
  const responsePost = await fetch(`https://dummyjson.com/posts/${postId}`);
  if (!responsePost.ok) {
    console.error("Error al obtener los detalles de la publicación");
    return;
  }
  const post = await responsePost.json();

  
  const responseUser = await fetch(`https://dummyjson.com/users/${post.userId}`);
  if (!responseUser.ok) {
    console.error("Error al obtener los detalles del autor");
    return;
  }
  const user = await responseUser.json();

  
  const responseComments = await fetch(`https://dummyjson.com/comments/post/${postId}`);
  if (!responseComments.ok) {
    console.error("Error al obtener los comentarios");
    return;
  }
  const commentsResponse = await responseComments.json();

  const textosDeComentarios = commentsResponse.comments.map(comment => comment.body);

  const detallesDePublicacion = {
    Titulo: post.title,
    Descripcion: post.body,
    Autor: `${user.firstName} ${user.lastName}`,
    Comentarios: textosDeComentarios,
  };

  console.log("Detalles de la publicación:");
  console.log(detallesDePublicacion);
}


for (let i = 1; i <= 5; i++) {
  imprimirDetallesDePublicacion(i);
}

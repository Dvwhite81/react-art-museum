import { Link, useParams } from "react-router-dom";
import "./ArtDescription.css";

function ArtDescription({ gallery }) {
  const { artId } = useParams();
  const art = gallery.objects.find((art) => art.id === Number(artId));
  console.log(art);
  return (
    <>
      <Link to={`/galleries/${gallery.id}`}>
        Back to Gallery {gallery.name}
      </Link>
      <Link to={{ pathname: `${art.url}` }} target="_blank">
        <h2>{art.title}</h2>
      </Link>
      <p>{`${art.description}`}</p>
      <p>{`${art.creditline}`}</p>
      <p>{`${art.technique}`}</p>
      {art.images.map((image) => {
        return (
          <img
            key={image.imageid}
            src={`${image.baseimageurl}`}
            alt={`${art.title}`}
          />
        );
      })}
    </>
  );
}

export default ArtDescription;

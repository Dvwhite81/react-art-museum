import { useParams, Route, Switch } from 'react-router-dom';
import ArtImageTile from '../ArtImageTile';
import './GalleryView.css';
import ArtDescription from '../ArtDescription';

function GalleryView({ galleries }) {
    const { galleryId } = useParams();

    const gallery = galleries.find(gallery => {
        return gallery.galleryid === Number(galleryId)
    });
        
    return (
        <>
            <h2>{ gallery.name }</h2>
            <Switch>
                <Route exact path='/galleries/:galleryId'>
                    {gallery.objects.map(each => {
                        return (
                            <ArtImageTile key={each.id} art={each} galleryId={galleryId} />
                        );
                    })}
                </Route>
                <Route path='/galleries/:galleryId/art/:artId'>
                    <ArtDescription gallery={gallery}/>
                </Route>
            </Switch>
        </>
    );
};

export default GalleryView;

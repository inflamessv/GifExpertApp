import { GifItem } from '../Components/GifItem';
import { useFetchGifs } from '../Hooks/useFetchGifs'

export const GifGrid= ({category})=>{

    const {images,isLoading} = useFetchGifs(category);

    return (
       <div>
            <h1>{ category }</h1>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className="card-grid">
                {
                    images.map((image)=>(
                      <GifItem
                        key={image.id}
                        title={image.title}
                        url={image.url}
                      />
                    ))
                }
            </div>
       </div>
    );
}
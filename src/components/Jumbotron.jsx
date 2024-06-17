import CustomSlider from "./CustomSlider";
import images from "../data/images";
function Jumbotron(){
return(
    <div className="Jumbo">
        <CustomSlider>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomSlider>
    </div>
)

}
export default Jumbotron
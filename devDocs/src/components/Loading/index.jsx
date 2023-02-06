import { useEffect } from "react";
import { useContext } from "react";
import { PuffLoader } from "react-spinners";
import { AuthContext } from "../../contexts/AuthContext";


const Loading = () => {

    const{isLoading, setIsLoading, override} =useContext(AuthContext);

    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      }, []);

    return(
        <PuffLoader
        color="#a016c7"
        isLoading={isLoading}
        size={250}
        cssOverride={override}
        />
    );
};

export default Loading;
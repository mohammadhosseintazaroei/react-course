import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const LoadingUser = () => {
      return (

        <div className="col-12 text-center p-5" >
          <Skeleton className="mb-4"  circle={true} height={100} width={100} />
          <Skeleton className="mb-2"  height={30} count={2} />
        </div>
      );
};

export default LoadingUser;

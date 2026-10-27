import Layout from "../components/Layout";
import Homepage from "../features/HomePage";

export const Routes = [
    {
      
        element : <Layout/>,
        children : [
            {
                path : "/",
                element : <Homepage/>
            }
        ]
    }
]
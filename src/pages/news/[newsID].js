import RootLayout from "@/components/Layouts/RootLayout";
import { Card } from "antd";

const NewsDetails = ({news}) => {
  console.log(news);
    return (
        <div>
              
                <Card
                    hoverable
                    style={{ width: 1200 , margin:"auto"}}
                    cover={<img alt="example" src={news.image_url}/>}
                  >
                   
                  <p>{news.title}</p>
                  <p> news ID : {news.id}</p>
                  <p>{news.description}</p>
                  </Card>
          
             
        </div>
    );
};

export default NewsDetails;


// for add the layout ... nav and footr
NewsDetails.getLayout = function getLayout(page) {
    return (
      <RootLayout>
        {page}
      </RootLayout>
    )
  }



// for diclearing how much static page need to pre render in build time 
// export async function getStaticPaths() {
//   // Call an external API endpoint to get 
//   const res = await fetch('http://localhost:5000/news')
//   const newses = await res.json()
 
//   // Get the paths we want to prerender based on posts
//   // In production environments, prerender all pages
//   // (slower builds, but faster initial page load)
//   const paths = newses.map((news) => ({
//     params: { newsID: news.id },
//   }))
 
//   // { fallback: false } means other routes should 404
//   return { paths, fallback: false }
// }


//   fetch the specific data .. for each news
// export const getStaticProps = async (context)=> {
  
export const getServerSideProps = async (context)=> {
    const {params} = context;
    const res = await fetch(`http://localhost:5000/news/${params?.newsID}`)
    const data = await res.json()
    console.log("specific news" , data);

    return {
        props: {
            news:data,
        }
    }
}
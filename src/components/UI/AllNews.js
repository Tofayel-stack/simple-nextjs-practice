import React from 'react';
import { Card, Col, Image, Row } from 'antd';
import Link from 'next/link';

const AllNews = ({allNews}) => {

  
    return (


        <div>



             <Row gutter={[16, 24]}>
                    {
                        allNews?.map((news) =>(
                            <Col 
                            key={news.id}
                            span={6}> 

                                    <Card
                                        hoverable
                                        style={{
                                        width: '100%',
                                        }}
                                        cover={
                                            <Image
                                            src={news?.image_url}
                                            width={450}
                                            height={200}
                                            responsive
                                            alt="news image"
                                            />
                                        }
                                    >
                                        <p>{news?.title}</p> 
                                        <div
                                            className='line'
                                            style={{
                                                height: "5px",
                                                margin:"20px 0",
                                                background:"#000",
                                                width:"100%"
                                            }}
                                        ></div>
                                        <p
                                        style={{fontSize:"15px"}}
                                        >
                                        {
                                            news?.description.slice(0,70)
                                        }
                                        </p>
                                        <button><Link href={`/news/${news?.id}`}>see more....</Link></button>
                                    </Card>
                            </Col>
                        ) )
                    }
                
               

          
            </Row>
        </div>
    );
};

export default AllNews;
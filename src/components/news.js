import React from "react"
import {graphql, Link, StaticQuery} from "gatsby"
import { Container } from "react-bootstrap"
import {
	container,
	heading
  } from './news.module.css'

  // news.module.css use for style the page and for responsiveness

const News = () =>
	(<>
			<StaticQuery query={graphql`
	{
        allContentfulNews {
			edges {
			  node {
				title
				image {
				  file {
					url
				  }
				}
			  }
			}
		  }
}		
    `}
	 render={data =>
 
		 <>
			<Container>
				 {data?.allContentfulNews?.edges?.map (({node}, i) => (
					 <div className={container} key={node.title} class="col-md-4">
						 <h4 className={heading}>{node?.title}</h4>
						<img  src={node.image.file.url} alt={"sdfv"}/>
						</div>
				 ))}
			 </Container>
		 </>
	 }
			>
			</StaticQuery>
		</>
	)

export default News
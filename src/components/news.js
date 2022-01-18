import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

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
					<Row>
						{data?.allContentfulNews?.edges?.map(({ node }, i) => (
							<Col sm={6} key={node.title}>
								<h4>{node?.title}</h4>
								<img src={node.image.file.url} alt={"sdfv"} width={250} height={250} />
							</Col>
						))}
					</Row>
				</Container>
			</>
		}
	>
	</StaticQuery>
</>
)

export default News
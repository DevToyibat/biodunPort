// import React from "react";
// import styled from "styled-components";

// const ServicesSection = (props) => {
//   const [readMore, setReadMore] = React.useState(false);

//   return (
//     <Container>
//       <Wrapper>
//         {props.user.map((datum) => {
//           return (
//             <Card>
//               <Image src={datum.img} />
//               <Content>
//                 <Title>{datum.title}</Title>
//                 <Desc>
//                   {readMore ? datum.desc : `${datum.desc.substring(0, 100)}...`}{" "}
//                   <button onClick={() => setReadMore(!readMore)}>
//                     {readMore ? "show less" : "show more"}
//                   </button>{" "}
//                 </Desc>
//               </Content>
//             </Card>
//           );
//         })}
//       </Wrapper>
//     </Container>
//   );
// }

// export default ServicesSection;

import React from "react";
import styled from "styled-components";
import data from "./data.json";

const serviceSection = () => {
  return (
    <Container id="service">
      <Wrapper>
        {/* {data.map(()=>()) props in first(), the data in second() which are the 3 info from data.json }*/}

        {data?.map((props) => (
          <Card>
            <Image src={props.img} />
            <Content>
              <Title>{props.title}</Title>
              <Desc>{props.desc}</Desc>
            </Content>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};

export default serviceSection;

const Card = styled.div`
  width: 300px;
  height: 500px;
  border-radius: 5px;
  background-color: #18434c;
  border: 3px solid #18434c;
  margin: 20px 10px;
  transition: all 350ms;
  transform: scale(1);

  :hover {
    transform: scale(1.03);
    border: 3px solid grey;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 60%;
  border-radius: 5px 5px 0 0;
  object-fit: cover;
`;

const Content = styled.div`
  font-family: poppins;
`;

const Title = styled.div`
  text-transform: uppercase;
  margin: 10px;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  line-height: 1;
  color: #c99b61;
`;

const Desc = styled.div`
  margin: 0 5px;
  color: #fffaf3;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 80vh;
  background: #fffaf3;
  color: white;
  font-family: poppins;
`;

// background: #f3f0d7;

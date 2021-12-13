import { gql, useQuery } from "@apollo/client";
import { RelatedTopic } from "../../common/interfaces/relatedTopics";

const GET_TOPICS = gql`
  query GetTopics($name:String!,$first:Int!){
    topic(name: $name) {
      relatedTopics(first: $first) {
        name
        stargazers {
          totalCount
        }
      }
    }
  }
`;

export const useGetTopics = (topicName:string, numberOfTopics:number):RelatedTopic[] => {
  const { data } = useQuery(GET_TOPICS, {
    variables: { name: topicName, first:numberOfTopics }
  });
  
  return data?.topic?.relatedTopics;
};

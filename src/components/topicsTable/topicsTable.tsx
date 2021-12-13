import React, { useState } from "react";

import { RelatedTopic } from "../../common/interfaces/relatedTopics";
import { useGetTopics } from "../../hooks/apollo/useGetTopic";

import './topicsTable.css';

const TopicsTable:React.FC=()=>{
    const [topic,setTopic] = useState("react");
    const [numberOfTopics, setNumberOfTopics] = useState(5);
    let topics:RelatedTopic[] = useGetTopics(topic,numberOfTopics) || [];
    
    const handleTopicClick =(topicName:string, event:React.MouseEvent)=>{
        event.preventDefault();
        setTopic(topicName);
    }

    return <div>
        {/* Max number equals to 10, because the documantation mention is the max value.*/}
        <p> Related topics <input type="number" max="10" min="1" value={numberOfTopics} onChange={(e)=>{ setNumberOfTopics(+ e.target.value)}} /> </p>
        {
            topics.length < 1 ?//This helps to not have an error when the array is empty
            <p>Loading...</p>:
            <table className="stargazers-table">
                <thead>
                    <tr>
                        <th></th>
                        {
                            topics.map(topic=> <th key={topic.name}> <a href="/" onClick={(e)=>{handleTopicClick(topic.name, e)}}> {topic.name.toLocaleUpperCase()} </a>  </th> )
                        }
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Stargazers count</td>
                        {
                            topics.map(topic=> <td key={topic.name}> {topic.stargazers.totalCount} </td> )
                        }
                    </tr>
                </tbody>
            </table>
    }
    </div>
}

export default TopicsTable;
import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import style from './style.css'

const LowerForm = ({agents = []}) => {
  return (
  <div className={style.formInnerLowerContainer}> 
    {agents.map((agent, idx) => {
    return (
      <div key={agent._id} 
      className={style.formAgentContainer} 
      id={style['formAgentContainer'+idx]}>
        <span>
          <img src={agent.agent_photo} 
          className={style.formAgentImage} 
          id={style.formAgentImage+idx}/>
        </span>
        <span className={style.formAgentName}
          id={style['formAgentName'+idx]}>
          {agent.agent_name}
        </span> 
        <span id={style['formAgentStars'+idx]}>
          <StarRatingComponent 
            className={style.formAgentStars}
            name="rate1" 
            starCount={5}
            starColor={"#3dca59"}
            emptyStarColor={"white"}
            value={agent.average_stars}/>
        </span>
        <span className={style.formAgentRatings}
          id={style['formAgentRatings'+idx]}>
          ({agent.num_ratings})
        </span>
        <span className={style.formAgentSales}
          id={style['formAgentSales'+idx]}>
          {agent.recent_sales} 
          <p className={style.formAgentSalesP}> 
            Recent Sales
          </p>
        </span>
        <span className={style.formAgentPhone}
          id={style['formAgentPhone'+idx]}>
          {agent.phone}
        </span>
        <span className={style.formAgentType} 
          id={style['formAgentType'+idx]}>
          {agent.agent_type.toUpperCase()+" AGENT"}
        </span>
      </div>
      ) 
    })}
    <p className={style.formInnerLowerContainerP}>
      Learn how to appear as the agent above
    </p>
  </div>
  )
}

export default LowerForm;
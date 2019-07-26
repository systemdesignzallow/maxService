import React from 'react'
import style from './style.css'

const UpperForm = () => {
  return(
      <div className={style.formInnerUpperContainer}>
        <form>
          <label>
            <input type="text" 
            name="name" 
            placeholder="Your Name" 
            className={style.formInputName}
            />
          </label>
          <br />
          <label>
            <input type="text" 
            name="tel" 
            placeholder="Phone" 
            className={style.formInputTel}
            />
          </label>
          <br />
          <label>
            <input type="text" 
            name="email" 
            placeholder="Email" 
            className={style.formInputEmail}
            />
          </label>
          <br/>
          <label>
            <input type="text" 
            name="interested-in" 
            placeholder='I am interested in 1225 E. Moreland St.'
            className={style.formInputInterest}
            />
          </label>
          <br />
          <input type="submit" 
          value="Contact Agent" 
          className={style.formContactButton}/>
          <br />
          <label className={style.formLabelCheckbox}>
            <input name="finance-info" 
            type="checkbox"
            /> 
            I want financing information.
          </label>
        </form>
        <div className={style.formContainerP}>
          <p>By pressing Contact Agent, you agree that Zallo Group and real estate professionals 
            may call/text you about your inquiry, which may involve use of automated means and 
            prerecorded/artificial voices. You don't need to consent as a condition of buying any 
            property, goods or services. Message/data rates may apply. You also agree to our <br/> 
            <span className={style.formTerms}> 
              Terms of Use. 
            </span> 
            Zallo does not endorse any real estate professionals.
          </p>
        </div>
    </div>
  )
}

export default UpperForm
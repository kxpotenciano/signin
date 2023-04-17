import React from "react";
import logg from "./Logo.svg";

function SingIn() {
       return (
  //   <div className="SingIn-form-container">
  //     <img src={logg}/>
  //     <div className="NewFlex">
  //     <form className="SingIn-form">
  //         <div className="SingIn-form-content">
  //           <div className="form-group mt-3">
  //             <label>No Sim card yet? <a href="https://blank.page/" target="_blank" rel="noreferrer" >Avail here</a> </label>
  //             <br/> 
  //             <label>Sign In</label>
  //             <input
  //               type="email"
  //               className="form-control mt-1"
  //               placeholder="Enter email"
  //             />
  //           </div>
  //           <div className="form-group mt-3">
  //             <input
  //               type="password"
  //               className="form-control mt-1"
  //               placeholder="Enter password"
  //             />
  //           </div>
  //           <div className="d-grid gap-2 mt-3">
  //             <button type="submit" className="btn btn-primary">
  //               Submit
  //             </button>

  //             <div className="d-grid gap-2 mt-3">
  //               <label>Don't have an account yet?</label>
  //               <button type="submit" className="btn btn-primary">
  //                 Register
  //               </button>
  //             </div>
  //           </div>
  //         </div>
  //       </form>
        
  //     <form className="SingIn-form">
  //         <div>
  //           <div>
  //             <label>
  //               <h4>New Sim card registration act FAQ</h4>
  //             </label>
  //             <br/>
  //             <a href="https://blank.page/" target="_blank" rel="noreferrer">
  //               {" "}
  //               What are the require information from the end user?
  //             </a>
  //             <br/>
  //             <a href="https://blank.page/" target="_blank" rel="noreferrer">
  //               What are the require information for the foreign national?
  //             </a>
  //             <br/>
  //             <a href="https://blank.page/" target="_blank" rel="noreferrer">
  //               Can you buy / register Sim card for others?
  //             </a>
  //             <br/>
  //             <a href="https://blank.page/" target="_blank" rel="noreferrer">
  //               What are the penalties for not comlpying?
  //             </a>

  //           </div>
  //         </div>
  //       </form>
  //     </div>
  //   </div>

    <div className="flex flex-col bg-black">
        <img src={logg}/>
      <div className="flex flex-row">
          <form className="shadow-md px-8 pt-6 pb-8 mb-4"> <br/>
            <div className="mb-4">
              <label> No Sim card yet? </label> <a href="#">Avail here</a>
            </div>
            <div className="mb-4">
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter Email Address"/>
            </div>
            <div className="mb-6">
              <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password"/>
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Proceed </button><br/><br/>
            <label>Don't have an account yet?</label><br/><br/>
              <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Register</button>
            </div><br/>
          </form>
        <form className="bg-black shadow-md px-8 pt-6 pb-8 mb-4"><br/>
              <label>
                <h4>New Sim card registration act FAQ</h4>
              </label>
                <ul><a href="#" target="_blank" rel="noreferrer"> {" "}What are the require information from the end user?</a></ul>
                <ul><a href="#" target="_blank" rel="noreferrer">What are the require information for the foreign national?</a></ul>
                <ul><a href="#" target="_blank" rel="noreferrer">Can you buy / register Sim card for others?</a></ul>
                <ul><a href="#" target="_blank" rel="noreferrer">What are the penalties for not comlpying?</a></ul>
          </form> 
        </div>
      </div>
  );
}
export default SingIn;

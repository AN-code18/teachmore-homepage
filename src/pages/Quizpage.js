import React, { useState,useEffect }from "react";
import "./Quizpage.css";
import { useHistory } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Editor } from '@tinymce/tinymce-react';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddIcon from '@mui/icons-material/Add';            
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import { Input } from "@mui/material";
import './Finalquiz';

function Quizpage() {
  const [show, setShow] = useState(false);
  const [input , setInput] = useState([{Questions:' ', Solutions:' '}]);
  const [body, setBody] = useState("");
  const [count , setCount] = useState(0);
  const [numinc , setNuminc] = useState(0);
  const [numdec , setNumdec] = useState(0);

   const handleaddClick=()=>{
     input([...input , {Questions:'', Solutions:''}]);
   }
  const incNum =() =>{
    setNuminc(numinc+1);
  }
  const decNum =() =>{
    setNumdec(numdec-1);
  }
   
    const handleClick =() =>{
      setCount(count+1);
    }
  
  const history = useHistory();
  const handleGoBack = () => {
    history.goBack();
  };


  return (
    <>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="current-item-quiz">
            <div className="current-item">
              <div className="modal-nav">
                <ArrowUpwardIcon style={{paddingTop:'5px',fontWeight:'800'}}/>
                <span className="text">Back to all questions in final quiz</span>
              </div>
            </div>
          </div>
          <div className="page">
              <div className="modal-header">
                  <div className="header">
                  <div>
                      <span><DoDisturbIcon className="cancel-icon"/></span>
                     </div> 
                      <div className="middle-header">
                          <button className="prev-next"><span><ChevronLeftIcon /></span></button>
                          <h6 className="h6" getcount ={count}> Question {count} of {count} </h6>
                          <button className="prev-next"><span><ChevronRightIcon /></span></button>
                      </div>
                      <div>
                      <span   onClick={handleGoBack} ><CloseIcon className="cancel-icon"/></span>
                     </div> 
                  </div>
              </div>
              <div className="modal-body">
                  <div>
                      <div className="question-content">
                          <div className="card">
                              <div>
                              <div className="quill-start"><label className="question-text">Question text</label>
                              <div style={{marginTop:'0.7rem'}}>
                              </div>
                              <div style={{padding:'1rem 1.25rem',backgroundColor: 'rgba(249,250,251)'}}> <div className="text-editor">
                                <Editor  textareaName="content" name ="Questions"
                                initialValue="Question will go here" className="editor"
                                onEditorChange={(newText)=>{setBody(newText)}}/>
                                </div>
                                  </div></div>
                                </div>
                              <div className="bottom-save-button">
                              <div>
                              <span className="save"><span style={{display: 'none ',color:'rgba(159,166,178)'}}>Saving..</span></span>
                              <span className="save"><span style={{display: 'none',color:'rgba(159,166,178)'}}>Saved</span></span></div>
                              <span className="save-btn"><button className="btn" style={{backgroundColor:'blue'}} >Save</button></span>
                              </div>
                          </div>
                          <div className="card" style={{marginTop:'1.5rem'}}>
                              <div>
                              <div className="quill-start"><label className="question-text">Solution text</label>
                              <div style={{marginTop:'0.25rem'}}>
                              </div>
                              <div style={{padding:'1rem 1.25rem',backgroundColor: 'rgba(249,250,251)'}}><div className="text-editor">
                                <Editor  textareaName="content" name="solutions" 
                                initialValue="Solution will go here " className="editor"
                                onEditorChange={(newText)=>{setBody(newText)}}/>
                                </div>
                                  </div></div>
                                  </div>
                            <div className="bottom-save-button">
                              <div>
                              <span className="save"><span style={{display: 'none ',color:'rgba(159,166,178)'}}>Saving..</span></span>
                              <span className="save"><span style={{display: 'none',color:'rgba(159,166,178)'}}>Saved</span></span></div>
                              <span className="save-btn"><button className="btn" style={{backgroundColor:'blue'}} >Save</button></span>
                              </div>
                          </div>
                      

                   <div className="card" style={{marginTop:'1.5rem'}}>
                        <div>
                          <label className="options">Options</label>
                          <div className="current-question">
                            <div className="option-length">
                              {/*div className="middle-div">  */}
                                <table className="table">
                                  <thead>
                                    <tr style={{display:'table-row', verticalAlign:'inherit'}}>
                                      <th className="blank"></th>
                                      <th className="heading">Correct</th> <th className="heading" style={{fontSize:'.75rem' , width:'50%'}}>Option text</th>
                                      <th className="blank"style={{width:'50%'}}></th>
                                    </tr>
                                  </thead>
                                  <tbody style={{display:'table-row-group',verticalAlign:'middle'}}>
                                    <tr><td className="side-icon"><button className="icon"><span style={{fontWeight:'900' , display:'inline-block' , lineHeight:'0.5'}}><UnfoldMoreIcon /></span></button></td>
                                    <td className="chkbox"><input type="checkbox" style={{lineHeight:'inherit', boxSizing:'border-box',padding:'0',fontSize:'100%', cursor:'default'}}></input></td>
                                    <td className="text-area"><textarea className="form-area"></textarea>
                                    <div style={{marginTop:'0.5rem', justifyContent:'flex-end',alignItems:'center',display:"flex"}}>
                                      <button type="submit" className="update"><span>Save</span></button></div></td>
                                      <td><div style={{justifyContent:'flex-end',alignItems:'center',display:'flex',marginTop:'1rem'}}>
                                      <a href="#"style={{curosr:'pointer',color: 'rgba(210,214,220)',fontWeight:'500',lineHeight:'1.25rem',fontSize:'.875rem',whiteSpace:'nowrap'}}><DeleteIcon /></a></div></td>
                                    </tr>
                                    <tr><td className="side-icon"><button className="icon"><span style={{fontWeight:'900' , display:'inline-block' , lineHeight:'0.5'}}><UnfoldMoreIcon /></span></button></td>
                                    <td className="chkbox"><input type="checkbox" style={{lineHeight:'inherit', boxSizing:'border-box',padding:'0',fontSize:'100%', cursor:'default'}}></input></td>
                                    <td className="text-area"><textarea className="form-area"></textarea>
                                    <div style={{marginTop:'0.5rem', justifyContent:'flex-end',alignItems:'center',display:"flex"}}>
                                      <button type="submit" className="update"><span>Save</span></button></div></td>
                                      <td><div style={{justifyContent:'flex-end',alignItems:'center',display:'flex',marginTop:'1rem'}}>
                                      <a href="#"style={{curosr:'pointer',color: 'rgba(210,214,220)',fontWeight:'500',lineHeight:'1.25rem',fontSize:'.875rem',whiteSpace:'nowrap'}}><DeleteIcon /></a></div></td>
                                    </tr>
                                    <tr><td className="side-icon"><button className="icon"><span style={{fontWeight:'900' , display:'inline-block' , lineHeight:'0.5'}}><UnfoldMoreIcon /></span></button></td>
                                    <td className="chkbox"><input type="checkbox" style={{lineHeight:'inherit', boxSizing:'border-box',padding:'0',fontSize:'100%', cursor:'default'}}></input></td>
                                    <td className="text-area"><textarea className="form-area"></textarea>
                                    <div style={{marginTop:'0.5rem', justifyContent:'flex-end',alignItems:'center',display:"flex"}}>
                                      <button type="submit" className="update"><span>Save</span></button></div></td>
                                      <td><div style={{justifyContent:'flex-end',alignItems:'center',display:'flex',marginTop:'1rem'}}>
                                      <a href="#"style={{curosr:'pointer',color: 'rgba(210,214,220)',fontWeight:'500',lineHeight:'1.25rem',fontSize:'.875rem',whiteSpace:'nowrap'}}><DeleteIcon /></a></div></td>
                                    </tr>
                                    <tr><td className="side-icon"><button className="icon"><span style={{fontWeight:'900' , display:'inline-block' , lineHeight:'0.5'}}><UnfoldMoreIcon /></span></button></td>
                                    <td className="chkbox"><input type="checkbox" style={{lineHeight:'inherit', boxSizing:'border-box',padding:'0',fontSize:'100%', cursor:'default'}}></input></td>
                                    <td className="text-area"><textarea className="form-area"></textarea>
                                    <div style={{marginTop:'0.5rem', justifyContent:'flex-end',alignItems:'center',display:"flex"}}>
                                      <button type="submit" className="update"><span>Save</span></button></div></td>
                                      <td><div style={{justifyContent:'flex-end',alignItems:'center',display:'flex',marginTop:'1rem'}}>
                                      <a href="#"style={{curosr:'pointer',color: 'rgba(210,214,220)',fontWeight:'500',lineHeight:'1.25rem',fontSize:'.875rem',whiteSpace:'nowrap'}}><DeleteIcon /></a></div></td>
                                    </tr>
                                  </tbody>
                                </table>
                             {/*</div> */}
                             </div>
                            </div>
                          </div>
                        <div style={{marginTop:'1.5rem'}}>
                          <div style={{justifyContent:'center',alignItems:'center',display:'flex'}}>
                            <div style={{marginRight:'0.5rem'}}>
                              <select className="select">
                                <option value="number:1" label="1">1</option>
                                <option value="number:2" label="2">2</option>
                                <option value="number:3" label="3">3</option>
                                <option value="number:4" label="4" selected="selected">4</option>
                              </select>
                            </div>
                            <button className="btn"><span>Add 3 </span><span> options</span></button>
                          </div>
                        </div>
                  </div>
                        <div className="card" style={{marginTop:"1.5rem"}}>
                          <div>
                            <div style={{flexDirection:'column'}}><label className="points">Points</label>
                            <div className="point-div">
                              <div style={{marginTop:'1rem'}}>
                                <div style={{display:'flex',flexGrow:'1', position:'relative'}}>
                                  <button className="inc-dec"><AddIcon onClick={incNum} /></button>
                                  <label className="count">{numinc}</label>
                                  {/*<input type="" className="count"></input> */}
                                </div>
                              </div>
                              <div style={{marginTop:'1rem'}}>
                                <div style={{display:'flex',flexGrow:'1', position:'relative'}}>
                                  <button className="inc-dec"><RemoveIcon onClick={decNum} /></button>
                                  <label className="count">{numdec}</label>
                                  {/*<input type="" className="count"></input>*/}
                                </div>
                              </div>
                            </div>
                            </div>
                            <div className="bottom-save-button">
                              <div>
                              <span className="save"><span style={{display: 'none ',color:'rgba(159,166,178)'}}>Saving..</span></span>
                              <span className="save"><span style={{display: 'none',color:'rgba(159,166,178)'}}>Saved</span></span></div>
                              <span className="save-btn"><button className="btn" style={{backgroundColor:'blue'}} >Save</button></span>
                              </div>
                          </div>
                        </div>
                    </div>
                    <div>
                    </div>
               </div>
               </div>
              <div className="modal-footer">
                <div className="footer">
                  <div>
                    <button className="delete-button">
                      <span style={{color:'red',fontWeight:'900' , display:'inline-block' , lineHeight:"1",textRendering:'auto'}}
                      onClick={() => setShow(!show)}>{show === true ? "":""}{/*<DeleteIcon />*/}
                    </span> 
                   { show &&
                    <span style={{color:'red',fontWeight:'900' , display:'inline-block' , lineHeight:"1",textRendering:'auto'}}> Deleting... </span>}
                    </button>
                  </div>
                  <div style={{display:'flex'}}>
                   <button className="done" type="submit"onClick={handleClick}>Done</button>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Quizpage;

 import { Component, Input } from '@angular/core';

@Component({
  selector: 'FormInput', 
  template: `<div role="tabpanel" class="tab-pane fade" id="form">
                    <h1> POST AN AD </h1>
                     <!--form for taking ad details -->
                    <form action="Javascript:void(0)" method="post">  
                                            
                            <label for="username" class="sr-only"> Name </label>
                            <input type="text" name="username" id="username" placeholder="Name" required autofocus />
            <br /><br />
                            <label for="email" class="sr-only"> Email </label>
                            <input type="email" name="email" id="email" placeholder="Email" required />
            <br /><br />
                            <label for="contact number" class="sr-only"> Contact Number </label>
                            <input type="number" name="contactNum" id="contact number" placeholder="Contact Number" />
            <br /><br />
                            <label for="category" class="sr-only"> Select Category </label>
                            <select id="category" onchange="checkCategory();" >
                                <!--onkeypress="checkCategory();" oninput="checkCategory();">-->
                                <option value="null" selected> Select Category </option>
                                <option value="book"> Book </option>
                                <option value="car"> Car </option>
                                <option value="mobile"> Mobile </option>
                            </select>
            <br /><br />
                        
                        <div id="book" class="hidden"> 
                            <label for="Btitle" class="sr-only"> Title </label>
                            <input type="text" name="title" id="Btitle" placeholder="Title" />
            <br /><br />
                            <label for="author" class="sr-only"> Author </label>
                            <input type="text" name="author" id="author" placeholder="Author" />
            <br /><br />
                            <label for="subject" class="sr-only"> Subject </label>
                            <input type="text" name="subject" id="subject" placeholder="Subject" />
            <br /><br />
                            <label for="Bprice" class="sr-only"> Price in PKR </label>
                            <input type="number" name="price" id="Bprice" placeholder="Price in PKR" />
            <br /><br />
                        <div class="wrapper">
                            <label for="Bimage" class="sr-only"> Upload Image </label>
                            <input type="file" name="pic" id="Bimage" data-toggle="tooltip" title="Upload image from 'C:/Users/Public/Pictures/' directory" />
                        </div>
            <br /><br />
                        </div>

                        <div id="car" class="hidden"> 
                            <label for="name" class="sr-only"> Name </label>
                            <input type="text" name="carname" id="name" placeholder="Name" />
            <br /><br />
                            <label for="Ccompany" class="sr-only"> Company </label>
                            <input type="text" name="companyname" id="Ccompany" placeholder="Company" />
            <br /><br />
                            <label for="Cmodel" class="sr-only"> Model </label>
                            <input type="number" name="model" id="Cmodel" placeholder="Model" />
            <br /><br />
                            <label for="engine" class="sr-only"> Engine (in cc) </label>
                            <input type="number" name="engine" id="engine" placeholder="Engine (in cc)" />
            <br /><br />
                            <label for="Ccolor" class="sr-only"> Color </label>
                            <input type="text" name="color" id="Ccolor" placeholder="Color" />
            <br /><br />
                            <label for="Cprice" class="sr-only"> Price in PKR </label>
                            <input type="number" name="price" id="Cprice" placeholder="Price in PKR" />
            <br /><br />
                        <div class="wrapper">
                            <label for="Cimage" class="sr-only"> Upload Image </label>
                            <input type="file" name="pic" id="Cimage" data-toggle="tooltip" title="Upload image from 'C:/Users/Public/Pictures/' directory" />
                        </div>
            <br /><br />
                        </div>

                        <div id="mobile" class="hidden"> 
                            <label for="Mmodel" class="sr-only"> Model </label>
                            <input type="number" name="model" id="Mmodel" placeholder="Model" />
            <br /><br />               
                            <label for="Mcompany" class="sr-only"> Company </label>
                            <input type="text" name="companyname" id="Mcompany" placeholder="Company" />
            <br /><br />
                            <label for="Mcolor" class="sr-only"> Color </label>
                            <input type="text" name="color" id="Mcolor" placeholder="Color" />
            <br /><br />
                            <label for="screensize" class="sr-only"> Size of Screen (in inches) </label>
                            <input type="number" name="screensize" id="screensize" placeholder="Size of Screen (in inches)" />
            <br /><br />
                            <label for="Mprice" class="sr-only"> Price in PKR </label>
                            <input type="number" name="price" id="Mprice" placeholder="Price in PKR" />
            <br /><br />    
                        <div class="wrapper">
                            <label for="Mimage" class="sr-only"> Upload Image </label>
                            <input type="file" name="pic" id="Mimage" data-toggle="tooltip" title="Upload image from 'C:/Users/Public/Pictures/' directory" />
                        </div>
            <br /><br />
                        </div>
                        <label for="post" class="sr-only"> Post </label>
                        <button type="button" id="post" class="btn btn-primary btn-block" onclick="validateForm();"> Publish Ad </button>
            <br /><br />
                    </form> <!-- /form -->
                </div> <!-- /#form tab -->`
                })
export class formInput { }

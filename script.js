let LOGGEDIN=false;
let OpenSideBarValue=0;
let ProfileDropDownValue=0;
let Login_registration_form_value=0;
document.body.style.overflow='auto';
let HomeScreen_viewCart=document.querySelector(".HomeScreen_viewCart");

const  Bar = document.querySelector(".dropdown-icon-div");
const ham=document.querySelector(".fa-bars");
function OpenSideBar() {
    Bar.classList.add("show");
    OpenSideBarValue=1;    
}
function CloseSideBar(){
    OpenSideBarValue=0;
    Bar.classList.remove("show");
}
window.addEventListener("resize",()=>{
    if(window.innerwidth>768.9){
        Bar.classList.remove("show");
    }
})

document.addEventListener('click',function(event){
    if(OpenSideBarValue===1){
        if(Bar.contains(event.target) || event.target==ham ){
            OpenSideBar();}
        else{
            CloseSideBar();}    }
});
document.addEventListener('scroll',function(event){
    if(OpenSideBarValue===1){
        if(Bar.contains(event.target) || event.target==ham ){
            OpenSideBar();}
        else{
            CloseSideBar();}    }
});

const login_Background=document.querySelector(".login_background");
const log_butt=document.querySelector(".fa-arrow-right-to-bracket");




log_butt.addEventListener("click", () => {
    Login_registration_form_value=1;
    setTimeout(() => {
        OpenRegisterForm();
    }, 10);
});

const register_form=document.querySelector(".register_form");
const login_form=document.querySelector(".login_form");
function OpenRegisterForm(){
    document.body.style.overflow='hidden';

    login_Background.style.display='flex';
    register_form.style.display='flex';
    login_form.style.display='none';
    const register_checker=document.querySelector(".register_checker");
    register_checker.style.display = 'none';
    HomeScreen_viewCart.style.display='none';
    

    login_Background.addEventListener("click", function (event) {
    if (!register_form.contains(event.target) && !log_butt.contains(event.target) && !login_form.contains(event.target)) {
        CloseRegisterForm();
        
    }
});

 

    
}
function NavToLoginForm(){
    document.getElementById("register_name_input").value="";
    document.getElementById("register_email_input").value="";
    document.getElementById("register_password_input").value="";
    const register_checker=document.querySelector(".register_checker");
    register_checker.style.display = 'none';
    login_Background.style.display='flex';
    register_form.style.display='none';
    login_form.style.display='flex';
    HomeScreen_viewCart.style.display='none';

}
function CloseRegisterForm(event){
    if(event) event.preventDefault();
    document.getElementById("register_name_input").value="";
    document.getElementById("register_email_input").value="";
    document.getElementById("register_password_input").value="";
    const register_checker=document.querySelector(".register_checker");
    register_checker.style.display = 'none';
    login_Background.style.display='none';
    register_form.style.display='none';
    login_form.style.display='none';

    document.body.style.overflow='auto';
    IsObjectEmpty();

}
let Complaint_Email;
function RegisterSubmit(event){
    if(event) event.preventDefault();

    const Register_Name=document.getElementById("register_name_input").value.trim();
    const Register_email=document.getElementById("register_email_input").value;
    const Register_password=document.getElementById("register_password_input").value;
    const Register_checker=document.querySelector(".register_checker");
    if (!Register_Name || !Register_email || !Register_password) {
        Register_checker.textContent="Fill all the inputs correctly !";
        Register_checker.style.display = 'block';
        return; // stop further execution
    } 
    LOGGEDIN=true;
    
    const Register_Name_FirstLetter=Register_Name.charAt(0).toUpperCase();

    const LoginRegister_Logo=document.querySelector(".fa-arrow-right-to-bracket");
    LoginRegister_Logo.style.display='none';
    const Profile_Logo=document.querySelector(".Profile_Logo");
    Profile_Logo.style.display='flex';
    const profile_dropdown_div=document.querySelector(".profile_dropdown_div");
    profile_dropdown_div.style.display='none';
    const First_letter_small_container=document.querySelector(".profile_div");
    const First_letter_large_container=document.querySelector(".profile_divs");
    First_letter_small_container.textContent=Register_Name_FirstLetter;
    First_letter_large_container.textContent=Register_Name_FirstLetter;
    document.querySelector(".LargeProfile_NameInfo").textContent=Register_Name;
    document.querySelector(".LargeProfile_EmailInfo").textContent=Register_email;
    Complaint_Email=Register_email;
    alert("Welocome "+Register_Name+". Your Registration to our FoodDash Website is Sucessfull!");
    UpdateComplaintContact();
    CloseRegisterForm();


}
function NavToRegisterForm(){
    
    document.getElementById("login_name_input").value="";
    document.getElementById("login_email_input").value="";
    document.getElementById("login_password_input").value="";
    const Login_checker=document.querySelector(".Login_checker");
    Login_checker.style.display = 'none';
    login_Background.style.display='flex';
    register_form.style.display='flex';
    login_form.style.display='none';
    HomeScreen_viewCart.style.display='none';

    
}
function CloseLoginForm(event){
    if(event) event.preventDefault();
    document.getElementById("login_name_input").value="";
    document.getElementById("login_email_input").value="";
    document.getElementById("login_password_input").value="";
    const Login_checker=document.querySelector(".Login_checker");
    Login_checker.style.display = 'none';
    register_form.style.display='none';
    login_form.style.display='none';
    login_Background.style.display='none';
    document.body.style.overflow='auto';
    IsObjectEmpty();
}

const Profile_Logo=document.querySelector(".Profile_Logo");
const First_letter_small_container=document.querySelector(".profile_div");
function LoginSubmit(event){
    if(event) event.preventDefault();

    const Login_Name=document.getElementById("login_name_input").value.trim();
    const Login_email=document.getElementById("login_email_input").value;
    const Login_password=document.getElementById("login_password_input").value;
    const Login_checker=document.querySelector(".Login_checker");
    if (!Login_Name || !Login_email || !Login_password) {
        Login_checker.textContent="Fill all the inputs correctly !";
        Login_checker.style.display = 'block';
        return; // stop further execution
    } 
    LOGGEDIN=true;
    
    const Login_Name_FirstLetter=Login_Name.charAt(0).toUpperCase();

    const Login_Logo=document.querySelector(".fa-arrow-right-to-bracket");
    Login_Logo.style.display='none';
    
    Profile_Logo.style.display='flex';
    const profile_dropdown_div=document.querySelector(".profile_dropdown_div");
    profile_dropdown_div.style.display='none';
    
    const First_letter_large_container=document.querySelector(".profile_divs");
    First_letter_small_container.textContent=Login_Name_FirstLetter;
    First_letter_large_container.textContent=Login_Name_FirstLetter;
    document.querySelector(".LargeProfile_NameInfo").textContent=Login_Name;
    document.querySelector(".LargeProfile_EmailInfo").textContent=Login_email;
    Complaint_Email=Login_email;
    alert("Welocome "+Login_Name+". Your Login to our FoodDash Website is Sucessfull!");
    UpdateComplaintContact();
    CloseLoginForm();
}

let privacyPolicy_background=document.querySelector(".privacyPolicy_background");
let privacyPolicy_display=document.querySelector(".privacyPolicy_display");
let forgotPassword_display=document.querySelector(".forgotPassword_display");
function Open_PrivacyPolicy(){
    privacyPolicy_background.style.display="flex";
    privacyPolicy_display.style.display="flex";
    document.querySelector(".privacyPolicy_heading").innerText="Privacy Policy";
    document.querySelector(".privacyPolicy_Acceptbutton").style.display="flex";
    document.querySelector(".privacyPolicy_Acceptbutton").onclick=function(){
        PrivacyPolicy_checkedFUNC();
    };
    document.querySelector(".privacyPolicy_text").innerText="We value your privacy and are committed to protecting your personal information. When you visit our food website, we may collect data such as your name, email, and preferences to enhance your experience, process orders, and improve our services. We do not sell or share your information with third parties without your consent, except when required by law. By using our website, you agree to our privacy practices, including the use of cookies to analyze traffic and personalize content. Your data is stored securely, and you may contact us anytime to review or delete your information.";
    document.body.style.overflow='hidden';
    

}
function Close_PrivacyPolicy(){
    privacyPolicy_background.style.display="none";
    privacyPolicy_display.style.display="none";
    document.body.style.overflow='auto';


}
function PrivacyPolicy_checkedFUNC(){
    document.querySelector(".privacyPolicy_Checkbox").checked=true;
    Close_PrivacyPolicy();
}

function Open_RefundPolicy(){
    privacyPolicy_background.style.display="flex";
    privacyPolicy_display.style.display="flex";
    document.querySelector(".privacyPolicy_heading").innerText="Refund Policy";
    document.querySelector(".privacyPolicy_Acceptbutton").style.display="none";
    document.querySelector(".privacyPolicy_text").innerText="At FoodDash, customer satisfaction is our top priority. If you receive an incorrect, damaged, or spoiled item, please contact us within 24 hours of delivery with a photo and order details to our feedback which you can find under the Contact Column in About Us section of this website. We will review the issue and offer a refund or replacement where applicable. Please note that due to the perishable nature of food, we do not offer refunds for changes of mind or dissatisfaction with taste. Refunds are processed to the original payment method within 5-7 business days after approval.";
    document.body.style.overflow='hidden';
}

function Open_ForgotPassword(){
    privacyPolicy_background.style.display="flex";
    forgotPassword_display.style.display="flex";
}
let ForgotPassword_email_input=document.querySelector("#ForgotPassword_email_input");
function Close_ForgotPassword(){
    document.querySelector("#ForgotPassword_email_input").value='';
    privacyPolicy_background.style.display="none";
    forgotPassword_display.style.display="none";
}
function ForgotPassword_linkSending(){
    let ForgotPassword_email_input_value=document.querySelector("#ForgotPassword_email_input").value;
    if(ForgotPassword_email_input_value){
        document.querySelector(".ForgotPassword_Notification").style.display="flex";
        document.querySelector(".ForgotPassword_Notification").innerText=`A Password reset link has been sent to ${ForgotPassword_email_input_value}.`;
        document.querySelector("#ForgotPassword_email_input").value='';
        setTimeout(() => {
            document.querySelector(".ForgotPassword_Notification").style.display="none";
        }, 2500);
    }
    else{
        document.querySelector(".ForgotPassword_Notification").style.display="flex";
        document.querySelector(".ForgotPassword_Notification").innerText=`Please Enter Your Registered Email.`;
        setTimeout(() => {
            document.querySelector(".ForgotPassword_Notification").style.display="none";
        }, 1500);
    }

}

const profile_dropdown_div=document.querySelector(".profile_dropdown_div");
function Profile_DropDown(){
    ProfileDropDownValue =1;
    profile_dropdown_div.style.display='flex';
    
    document.addEventListener('click',Profile_DropDown_lisitner);
    document.addEventListener('scroll',Profile_DropDown_lisitner);
}
function CloseProfile(){
    ProfileDropDownValue=0;
    profile_dropdown_div.style.display='none';
    
    document.removeEventListener('click',Profile_DropDown_lisitner);
    document.removeEventListener('scroll',Profile_DropDown_lisitner);
}

function LogOut(){
    
    document.querySelector(".LargeProfile_NameInfo").textContent="";
    document.querySelector(".LargeProfile_EmailInfo").textContent="";
    LOGGEDIN=false;
    document.getElementById("login_name_input").value="";
    document.getElementById("login_email_input").value="";
    document.getElementById("login_password_input").value="";
    const Login_checker=document.querySelector(".Login_checker");
    Login_checker.style.display = 'none';

    const Login_Logo=document.querySelector(".fa-arrow-right-to-bracket");
    Login_Logo.style.display='flex';
    const Profile_Logo=document.querySelector(".Profile_Logo");
    Profile_Logo.style.display='none';
    alert("Logged Out Sucessfully!");
} 


function Profile_DropDown_lisitner(event){
    
        if(profile_dropdown_div.contains(event.target) || event.target==Profile_Logo || event.target==First_letter_small_container ){
            Profile_DropDown();}
        else{
            CloseProfile();
            }    
        
}

       
let location_background=document.querySelector(".location_background");    
let locate_us_div=document.querySelector(".locate_us_div");
let Locate_Us=document.querySelector(".Locate_Us");
function Open_location(){

    location_background.style.display='flex';
    locate_us_div.style.display='flex';

    location_background.addEventListener("click", function (event) {
    if (!locate_us_div.contains(event.target)) {
        Close_location();
        
    }});
}

let Cross_locate_us=document.querySelector("#Cross_locate_us");
function Close_location(){

    location_background.style.display='none';
    locate_us_div.style.display='none';
}


/*
document.addEventListener('click',function(event){
    if(OpenSideBarValue===1){
        if(Bar.contains(event.target) || event.target==ham ){
            OpenSideBar();}
        else{
            CloseSideBar();}    }
});
*/
let home2_expanded_Card=document.querySelector(".home2_expanded_Card");
let home2_expanded_Content=document.querySelector(".home2_expanded_Content");
let expanded_home2_image_div = document.querySelector('.expanded_home2_image_div');
let home2_expanded_Food_Name=document.querySelector('.home2_expanded_Food_Name');
let expanded_rating=document.querySelector('.expanded_rating');
let expanded_veganTag=document.querySelector('.expanded_veganTag');
let home2_expanded_foods_description=document.querySelector(".home2_expanded_foods_description");
let home2_expanded_foods_nutrition_info=document.querySelector(".home2_expanded_foods_nutrition_info");
let home2_expanded_foods_price_info=document.querySelector(".home2_expanded_foods_price_info");
let home2_order_button=document.querySelector("#home2_order_button");

function Open_home2_expanded_Card(element) {
    const expandedImage=element.querySelector('img');
    const expandedImage_Extracted_name=element.querySelector('p');

    document.querySelector(".home2food_card_background").style.display='flex';
    document.querySelector(".home2_expanded_Card").style.display='flex';
    
    

    expanded_home2_image_div.innerHTML=expandedImage.outerHTML;
    home2_expanded_Food_Name.innerText=expandedImage_Extracted_name.innerText.replace(/\n/g,' ');

    
    if(home2_expanded_Food_Name.innerText=="Indian Kaju Katli"){
        expanded_rating.textContent='⭐⭐⭐⭐⭐ (20)';
        expanded_veganTag.classList.add("green");
        expanded_veganTag.textContent="◉ Veg";
        home2_expanded_foods_description.textContent="Made from condensed milk, ghee, sugar, and adorned with chopped pistachios and rose petals. Use of full-cream milk and slowly-simmered until it reaches the perfect grainy-soft texture.";
        home2_expanded_foods_nutrition_info.textContent="Protein - 8g, Carbs - 50g";
        home2_expanded_foods_price_info.textContent="$50";
        document.querySelector(".home2_expanded_AddToCart_button").onclick=function(){
            AddToCart('● Indian Kaju Katli');
        }
        
        
    }
    else if(home2_expanded_Food_Name.innerText=="Grilled Chicken and Caesar Salad"){
        expanded_rating.textContent='⭐⭐⭐⭐⭐ (40)';
        expanded_veganTag.classList.add("red");
        expanded_veganTag.textContent="◉ Non-Veg";
        home2_expanded_foods_description.textContent="A wholesome grilled chicken Caesar salad — packed with crunchy romaine lettuce, parmesan, cherry tomatoes, golden croutons, and perfectly grilled chicken breast. Crisp, smoky, creamy — it’s a refreshing burst of textures and bold flavors.";
        home2_expanded_foods_nutrition_info.textContent="Protein - 35g, Carbs - 40g";
        home2_expanded_foods_price_info.textContent="$350";
        document.querySelector(".home2_expanded_AddToCart_button").onclick=function(){
            AddToCart('● Grilled Chicken and Caesar Salad');
        }
    }
    else if(home2_expanded_Food_Name.innerText=="Chicken , Prawns and Veggies Plater"){
        expanded_rating.textContent='⭐⭐⭐⭐⭐ (80)';
        expanded_veganTag.classList.add("red");
        expanded_veganTag.textContent="◉ Non-Veg";
        home2_expanded_foods_description.textContent="This is a rustic yet elegant roasted chicken platter with glazed carrots, herb-roasted potatoes, peas, and steamed broccoli. Chicken is marinated in fresh herbs, garlic, and lemon for maximum flavor.";
        home2_expanded_foods_nutrition_info.textContent="Protein - 50g, Carbs - 50g";
        home2_expanded_foods_price_info.textContent="$500";
        document.querySelector(".home2_expanded_AddToCart_button").onclick=function(){
            AddToCart('● Chicken , Prawns and Veggies Plater');
        }
    }
    setTimeout(() => {
        document.addEventListener("click",CloseHome2ExpandedFoods_EventListener);
        /*document.addEventListener("scroll",CloseHome2ExpandedFoods_EventListener);*/
    }, 10);
}

function Close_home2_expanded_Card(){
    document.querySelector(".home2food_card_background").style.display='none';
    document.querySelector(".home2_expanded_Card").style.display='none';
    expanded_veganTag.classList.remove("red");
    expanded_veganTag.classList.remove("green");
    document.removeEventListener("click",CloseHome2ExpandedFoods_EventListener);
    document.removeEventListener("scroll",CloseHome2ExpandedFoods_EventListener);
}
function CloseHome2ExpandedFoods_EventListener(event){
    if(!home2_expanded_Card.contains(event.target)){
            Close_home2_expanded_Card();
        }
}


let Menu_ExpandedFoodCard_Background=document.querySelector(".Menu_ExpandedFoodCard_Background");
let Menu_Expanded_FoodCard=document.querySelector(".Menu_Expanded_FoodCard");
let expanded_Menu_image_div=document.querySelector(".expanded_Menu_image_div");
let Menu_expanded_Food_Ethnicity=document.querySelector(".Menu_expanded_Food_Ethnicity");
let Menu_expanded_Food_Name=document.querySelector(".Menu_expanded_Food_Name");
let Menu_expanded_rating=document.querySelector(".Menu_expanded_rating");
let Menu_expanded_veganTag=document.querySelector(".Menu_expanded_veganTag");
let Menu_expanded_foods_description=document.querySelector(".Menu_expanded_foods_description");
let Menu_expanded_foods_nutrition_info=document.querySelector(".Menu_expanded_foods_nutrition_info");
let Menu_expanded_foods_price_info=document.querySelector(".Menu_expanded_foods_price_info");
function Open_Menu_expanded_FoodCard(element){
    Menu_ExpandedFoodCard_Background.style.display="flex";
    Menu_Expanded_FoodCard.style.display="flex";

    const MenuImage=element.querySelector("img");
    const Menu_Ethnicity=element.querySelector(".orange");
    const Menu_FoodName=element.querySelector("p");
    const Menu_ratings=element.querySelector(".ratings");
    
    
    expanded_Menu_image_div.innerHTML=MenuImage.outerHTML;
    Menu_expanded_Food_Ethnicity.textContent=Menu_Ethnicity.textContent;
    Menu_expanded_Food_Name.textContent=Menu_FoodName.textContent;
    
    console.log(Menu_expanded_Food_Name.textContent);

    if(Menu_expanded_Food_Name.textContent=="Gobi Manchurian"){
        Menu_expanded_rating.textContent="⭐⭐⭐⭐⭐"+Menu_ratings.textContent;
        Menu_expanded_veganTag.classList.add("green");
        Menu_expanded_veganTag.textContent="◉ Veg";
        Menu_expanded_foods_description.textContent="Crispy cauliflower tossed in a spicy Indo-Chinese sauce with garlic, soy, and spring onions. The outside stays crunchy while the inside remains tender. It delivers a bold, tangy flavor in every bite.";
        Menu_expanded_foods_nutrition_info.textContent="Protein - 5g, Carbs - 50g";
        Menu_expanded_foods_price_info.textContent="$180";
        document.querySelector(".Menu_expanded_AddToCart_button").onclick=function(){
            AddToCart('● Gobi Manchurian');
        }
        
    }
    else if(Menu_expanded_Food_Name.textContent=="Chicken Manchurian"){
        Menu_expanded_rating.textContent="⭐⭐⭐⭐⭐"+Menu_ratings.textContent;
        Menu_expanded_veganTag.classList.add("red");
        Menu_expanded_veganTag.textContent="◉ Non-Veg";
        Menu_expanded_foods_description.textContent="Deep-fried chicken chunks marinated in fiery South Indian spices and tempered with curry leaves and chilies. The outer layer is crisp, locking in juicy meat. It's hot, flavorful, and perfectly spiced.";
        Menu_expanded_foods_nutrition_info.textContent="Protein - 25g, Carbs - 150g";
        Menu_expanded_foods_price_info.textContent="$250";
        document.querySelector(".Menu_expanded_AddToCart_button").onclick=function(){
            AddToCart('● Chicken Manchurian');
        }
    }
    else if(Menu_expanded_Food_Name.textContent=="Butter Chicken"){
        Menu_expanded_rating.textContent="⭐⭐⭐⭐⭐"+Menu_ratings.textContent;
        Menu_expanded_veganTag.classList.add("red");
        Menu_expanded_veganTag.textContent="◉ Non-Veg";
        Menu_expanded_foods_description.textContent="Tender chicken cooked in a rich, buttery tomato gravy with cream and mild spices. The texture is smooth and velvety, with a smoky touch. A classic blend of sweetness, spice, and richness.";
        Menu_expanded_foods_nutrition_info.textContent="Protein - 25g, Carbs - 200g";
        Menu_expanded_foods_price_info.textContent="$300";
        document.querySelector(".Menu_expanded_AddToCart_button").onclick=function(){
            AddToCart('● Butter Chicken');
        }
    }
    else if(Menu_expanded_Food_Name.textContent=="Roasted Mushrooms"){
        Menu_expanded_rating.textContent="⭐⭐⭐⭐⭐"+Menu_ratings.textContent;
        Menu_expanded_veganTag.classList.add("green");
        Menu_expanded_veganTag.textContent="◉ Veg";
        Menu_expanded_foods_description.textContent="Mushrooms roasted in olive oil with herbs until golden and juicy. Each bite has a slight crisp on the outside and an earthy softness inside. Simple, aromatic, and full of natural flavor.";
        Menu_expanded_foods_nutrition_info.textContent="Protein - 15g, Carbs - 100g";
        Menu_expanded_foods_price_info.textContent="$200";
        document.querySelector(".Menu_expanded_AddToCart_button").onclick=function(){
            AddToCart('● Roasted Mushrooms');
        }
    }
    else if(Menu_expanded_Food_Name.textContent=="Masala Dosa"){
        Menu_expanded_rating.textContent="⭐⭐⭐⭐⭐"+Menu_ratings.textContent;
        Menu_expanded_veganTag.classList.add("green");
        Menu_expanded_veganTag.textContent="◉ Veg";
        Menu_expanded_foods_description.textContent="A crispy golden rice crêpe filled with spicy mashed potatoes, served with coconut chutney and hot sambar. A comforting classic loved across India!";
        Menu_expanded_foods_nutrition_info.textContent="Protein - 5g, Carbs - 70g";
        Menu_expanded_foods_price_info.textContent="$150";
        document.querySelector(".Menu_expanded_AddToCart_button").onclick=function(){
            AddToCart('● Masala Dosa');
        }
    }
    else if(Menu_expanded_Food_Name.textContent=="Non - Veg Meals"){
        Menu_expanded_rating.textContent="⭐⭐⭐⭐⭐"+Menu_ratings.textContent;
        Menu_expanded_veganTag.classList.add("red");
        Menu_expanded_veganTag.textContent="◉ Non-Veg";
        Menu_expanded_foods_description.textContent="A traditional South Indian platter with rice, chicken or fish curry, side dishes, rasam, curd, and pickles. A complete and fulfilling meal experience.";
        Menu_expanded_foods_nutrition_info.textContent="Protein - 15g, Carbs - 270g";
        Menu_expanded_foods_price_info.textContent="$250";
        document.querySelector(".Menu_expanded_AddToCart_button").onclick=function(){
            AddToCart('● Non - Veg Meals');
        }
    }
    else if(Menu_expanded_Food_Name.textContent=="Special Briyani"){
        Menu_expanded_rating.textContent="⭐⭐⭐⭐⭐"+Menu_ratings.textContent;
        Menu_expanded_veganTag.classList.add("red");
        Menu_expanded_veganTag.textContent="◉ Non-Veg";
        Menu_expanded_foods_description.textContent="Aromatic basmati rice slow-cooked with tender chicken, whole spices, and saffron. Every bite is rich, flavorful, and royal.";
        Menu_expanded_foods_nutrition_info.textContent="Protein - 15g, Carbs - 200g";
        Menu_expanded_foods_price_info.textContent="$300";
        document.querySelector(".Menu_expanded_AddToCart_button").onclick=function(){
            AddToCart('● Special Briyani');
        }
    }
    else if(Menu_expanded_Food_Name.textContent=="Veg Briyani"){
        Menu_expanded_rating.textContent="⭐⭐⭐⭐⭐"+Menu_ratings.textContent;
        Menu_expanded_veganTag.classList.add("green");
        Menu_expanded_veganTag.textContent="◉ Veg";
        Menu_expanded_foods_description.textContent="Fragrant rice layered with mixed vegetables, herbs, and subtle spices. A wholesome and hearty dish that satisfies every palate.";
        Menu_expanded_foods_nutrition_info.textContent="Protein - 8g, Carbs - 150g";
        Menu_expanded_foods_price_info.textContent="$200";
        document.querySelector(".Menu_expanded_AddToCart_button").onclick=function(){
            AddToCart('● Veg Briyani');
        }
    }
    else if(Menu_expanded_Food_Name.textContent=="Choco - Cheese Cake"){
        Menu_expanded_rating.textContent="⭐⭐⭐⭐⭐"+Menu_ratings.textContent;
        Menu_expanded_veganTag.classList.add("green");
        Menu_expanded_veganTag.textContent="◉ Veg";
        Menu_expanded_foods_description.textContent="A rich, creamy cheesecake layered over a fudgy chocolate base and topped with silky chocolate ganache. Pure indulgence in every bite.";
        Menu_expanded_foods_nutrition_info.textContent="Protein - 5g, Carbs - 150g";
        Menu_expanded_foods_price_info.textContent="$150";
        document.querySelector(".Menu_expanded_AddToCart_button").onclick=function(){
            AddToCart('● Choco - Cheese Cake');
        }
    }
    else if(Menu_expanded_Food_Name.textContent=="Ice - Cream Bowl"){
        Menu_expanded_rating.textContent="⭐⭐⭐⭐⭐"+Menu_ratings.textContent;
        Menu_expanded_veganTag.classList.add("green");
        Menu_expanded_veganTag.textContent="◉ Veg";
        Menu_expanded_foods_description.textContent="A vibrant scoop of happiness! Enjoy multiple real fruit and classic flavors swirled into one scoop — creamy, colorful, and absolutely refreshing.";
        Menu_expanded_foods_nutrition_info.textContent="Protein - 5g, Carbs - 200g";
        Menu_expanded_foods_price_info.textContent="$200";
        document.querySelector(".Menu_expanded_AddToCart_button").onclick=function(){
            AddToCart('● Ice - Cream Bowl');
        }
    }
    else if(Menu_expanded_Food_Name.textContent=="Orange Juice"){
        Menu_expanded_rating.textContent="⭐⭐⭐⭐⭐"+Menu_ratings.textContent;
        Menu_expanded_veganTag.classList.add("green");
        Menu_expanded_veganTag.textContent="◉ Veg";
        Menu_expanded_foods_description.textContent="Freshly squeezed from ripe oranges, this juice is loaded with vitamin C and natural sweetness. Served chilled for a citrusy energy boost!";
        Menu_expanded_foods_nutrition_info.textContent="Protein - 2g, Carbs - 80g";
        Menu_expanded_foods_price_info.textContent="$80";
        document.querySelector(".Menu_expanded_AddToCart_button").onclick=function(){
            AddToCart('● Orange Juice');
        }
    }
    else if(Menu_expanded_Food_Name.textContent=="Blueberry Shake"){
        Menu_expanded_rating.textContent="⭐⭐⭐⭐⭐"+Menu_ratings.textContent;
        Menu_expanded_veganTag.classList.add("green");
        Menu_expanded_veganTag.textContent="◉ Veg";
        Menu_expanded_foods_description.textContent="A creamy, chilled shake blended with juicy blueberries and rich ice cream — a perfect mix of sweetness and tartness in every sip.";
        Menu_expanded_foods_nutrition_info.textContent="Protein - 4g, Carbs - 200g";
        Menu_expanded_foods_price_info.textContent="$130";
        document.querySelector(".Menu_expanded_AddToCart_button").onclick=function(){
            AddToCart('● Blueberry Shake');
        }
    }

    setTimeout(() => {
        document.addEventListener("click",Close_Menu_expanded_FoodCard_EventListener);
        /*document.addEventListener("scroll",CloseHome2ExpandedFoods_EventListener);*/
    }, 10);


}

function Close_Menu_expanded_FoodCard_EventListener(event){
    if(!Menu_Expanded_FoodCard.contains(event.target)){
            Close_Menu_expanded_FoodCard();
        }
}


function Close_Menu_expanded_FoodCard(){
    Menu_ExpandedFoodCard_Background.style.display="none";
    Menu_Expanded_FoodCard.style.display="none";
    Menu_expanded_veganTag.classList.remove("red");
    Menu_expanded_veganTag.classList.remove("green");
    document.removeEventListener("click",Close_Menu_expanded_FoodCard_EventListener);
}

let Final_cart_background=document.querySelector(".Final_cart_background");
let Final_cart_Card=document.querySelector(".Final_cart_Card");

function open_final_card(){
    Final_cart_background.style.display="flex";
    Final_cart_Card.style.display="flex";
    document.body.style.overflow='hidden';
    HomeScreen_viewCart.style.display='none';
    removeFromCart();
    setTimeout(() => {
        document.addEventListener("click",Close_FinalCard_EventListener);
        
    }, 10);
}
function close_final_card(){
    Final_cart_background.style.display="none";
    Final_cart_Card.style.display="none";
    document.body.style.overflow='auto';
    IsObjectEmpty();
    document.removeEventListener("click",Close_FinalCard_EventListener);
    

}
function Close_FinalCard_EventListener(event){
    if(!Menu_Expanded_FoodCard.contains(event.target)){
           // close_final_card();
        }
}

let CartObject={};
let Price_CartItem={
    "● Indian Kaju Katli": 50,
    "● Grilled Chicken and Caesar Salad":350,
    "● Chicken , Prawns and Veggies Plater":500,
    "● Gobi Manchurian":180,
    "● Chicken Manchurian":250,
    "● Butter Chicken":300,
    "● Roasted Mushrooms":200,
    "● Masala Dosa":150,
    "● Non - Veg Meals":250,
    "● Special Briyani":300,
    "● Veg Briyani":200,
    "● Choco - Cheese Cake":150,
    "● Ice - Cream Bowl":200,
    "● Orange Juice":80,
    "● Blueberry Shake":130



}
let YourCartIsEmptyText_OR_TotalNoOfItems=document.querySelector(".YourCartIsEmptyText_OR_TotalNoOfItems");
let Added_items=document.querySelector(".Added_items");
let AddToCart_Notification=document.querySelector(".AddToCart_Notification");
let ExpandedCard_TotalAmountDisplay=document.querySelector(".ExpandedCard_TotalAmountDisplay");
let ExpandedCard_deliveryAmountDisplay=document.querySelector(".ExpandedCard_deliveryAmountDisplay");
let final_card_coupon_input=document.querySelector(".final_card_coupon_input");
let applied_dicount_value=final_card_coupon_input.value.trim();
let deliveryCharge_flag=0;
let DiscountCode_flag=0;
function AddToCart(foodName){
    
    if(CartObject[foodName]){
        CartObject[foodName]++;
    }
    else{
        CartObject[foodName]=1;
    }
    
    IsObjectEmpty();
    
    
    AddToCart_Notification.style.display="flex";
    document.querySelector(".home2_ExpandedCard_notification").style.display='flex';
    document.querySelector(".Menu_ExpandedCard_notification").style.display="flex";

    setTimeout(() => {
        AddToCart_Notification.style.display="none";
        document.querySelector(".home2_ExpandedCard_notification").style.display='none';
        document.querySelector(".Menu_ExpandedCard_notification").style.display="none";
    }, 1000);
    

    UpdateCart();
}
function IsObjectEmpty(){
    if (Object.keys(CartObject).length !== 0) {
        document.querySelector(".final_card_bottom_div").style.display="flex";
        HomeScreen_viewCart.style.display="flex";
        ExpandedCard_deliveryAmountDisplay.innerText="$10";
        deliveryCharge_flag=10;
    }
}
function removeFromCart(foodName){
    if(CartObject[foodName]){
        CartObject[foodName]--;
        FinalCard_Expanded_notification.classList.remove("green","red");
        FinalCard_Expanded_notification.classList.add("red");
        FinalCard_Expanded_notification.innerText="Item Removed!";
        FinalCard_Expanded_notification.style.display="flex";
        setTimeout(() => {
            FinalCard_Expanded_notification.style.display="none";
        }, 1000);
        if (CartObject[foodName] == 0) {
          delete CartObject[foodName];
        }
        
    }
    if (Object.keys(CartObject).length === 0) {
        HomeScreen_viewCart.style.display="none";
        document.querySelector(".final_card_bottom_div").style.display="none";
        ExpandedCard_deliveryAmountDisplay.innerText="$0";
        ExpandedCard_TotalAmountDisplay.innerText=`$0`;
        ExpandedCard_FinalFinalDisplay.innerText="$0";
        deliveryCharge_flag=0;
        discount_remove_process(); 
    } 
    final_card_actual_price.innerText='';
    UpdateCart();
}
let number_of_orders_display=document.querySelector(".number_of_orders_display");
let final_card_actual_price=document.querySelector(".final_card_actual_price");
let final_card_slashed_price=document.querySelector(".final_card_slashed_price");
let ExpandedCard_DiscountDisplay=document.querySelector(".ExpandedCard_DiscountDisplay");
let ExpandedCard_FinalFinalDisplay=document.querySelector(".ExpandedCard_FinalFinalDisplay");
function UpdateCart(){
    
    Added_items.innerHTML="";
    let TotalItems=0;
    let Whole_totalPrice=0;
    for(items in CartObject){
        const quantity=CartObject[items];
        Item_totalPrice=quantity*Price_CartItem[items];
        TotalItems=TotalItems+quantity;
        Whole_totalPrice=Whole_totalPrice+Item_totalPrice;
       
        
        final_card_actual_price.innerText=`$${Whole_totalPrice+deliveryCharge_flag}`;
        ExpandedCard_FinalFinalDisplay.innerText=`$${Whole_totalPrice+deliveryCharge_flag}`;
        ExpandedCard_TotalAmountDisplay.innerText=`$${Whole_totalPrice}`;
        const items_div=document.createElement("div");
        items_div.innerHTML=`${items} X ${quantity} → ($${Item_totalPrice})
            <button onclick="removeFromCart('${items}')" class="Cart_Item_Remove_button">Remove</button> `;
        Added_items.appendChild(items_div);
   
    }
    YourCartIsEmptyText_OR_TotalNoOfItems.innerHTML=`Total Items : ${TotalItems}`;
    number_of_orders_display.innerHTML=`${TotalItems}`;
    
    if(DiscountCode_flag==1){
        ExpandedCard_DiscountDisplay.innerText="50%";
        final_card_slashed_price.innerText=`$${Whole_totalPrice+deliveryCharge_flag}`;
        final_card_actual_price.innerText=`$${(Whole_totalPrice+deliveryCharge_flag)/2}`;
        ExpandedCard_FinalFinalDisplay.innerText=`$${(Whole_totalPrice+deliveryCharge_flag)/2}`;
    }
    else if(DiscountCode_flag==2){
        ExpandedCard_DiscountDisplay.innerText="25%";
        final_card_slashed_price.innerText=`$${Whole_totalPrice+deliveryCharge_flag}`;
        final_card_actual_price.innerText=`$${(Whole_totalPrice+deliveryCharge_flag)*0.75}`;
        ExpandedCard_FinalFinalDisplay.innerText=`$${(Whole_totalPrice+deliveryCharge_flag)*0.75}`;
    }

    
}

let Expanded_FinalCartDetails=document.querySelector(".Expanded_FinalCartDetails");
let Detailstext_Icon_div=document.querySelector(".Detailstext_Icon_div");
function open_expnadedDetails(){
    Expanded_FinalCartDetails.style.display="flex";

}
function close_expnadedDetails(){
    Expanded_FinalCartDetails.style.display="none";
}


let FinalCard_Expanded_notification=document.querySelector(".FinalCard_Expanded_notification");
let Discount_RemoveButton=document.querySelector(".Discount_RemoveButton");
function Applied_Discount(){
    let applied_dicount_value=final_card_coupon_input.value.trim();
    FinalCard_Expanded_notification.classList.remove("green","red");
    if(applied_dicount_value=='rexronald777'){
        
        FinalCard_Expanded_notification.classList.add("green");
        FinalCard_Expanded_notification.innerText="Discount Code Applied!";
        DiscountCode_flag=1;
        Discount_RemoveButton.style.display="inline-block";
        FinalCard_Expanded_notification.style.display="flex";
        setTimeout(() => {
            FinalCard_Expanded_notification.style.display="none";
        }, 1000);
        final_card_coupon_input.value='';
    }
    else if(applied_dicount_value=='rexronald333'){
        
        FinalCard_Expanded_notification.classList.add("green");
        FinalCard_Expanded_notification.innerText="Discount Code Applied!";
        DiscountCode_flag=2;
        Discount_RemoveButton.style.display="inline-block";
        FinalCard_Expanded_notification.style.display="flex";
        setTimeout(() => {
            FinalCard_Expanded_notification.style.display="none";
        }, 1000);
        final_card_coupon_input.value='';
    }
    else if(applied_dicount_value==''){
        FinalCard_Expanded_notification.classList.add("red");
        final_card_coupon_input.value='';

        FinalCard_Expanded_notification.innerText="Apply your Code!";
        FinalCard_Expanded_notification.style.display="flex";
        setTimeout(() => {
            FinalCard_Expanded_notification.style.display="none";
        }, 1000);
        
    }
    else{
        FinalCard_Expanded_notification.classList.add("red");
        final_card_coupon_input.value='';

        FinalCard_Expanded_notification.innerText="Invalid Code!";
        FinalCard_Expanded_notification.style.display="flex";
        setTimeout(() => {
            FinalCard_Expanded_notification.style.display="none";
        }, 1000);
        
    }
    
    UpdateCart();
}
function discount_remove_process(){
    DiscountCode_flag=0;
    final_card_slashed_price.innerText="";
    ExpandedCard_DiscountDisplay.innerText="0%";
    Discount_RemoveButton.style.display="none";
}
function discount_remove_button(){
    discount_remove_process();
    FinalCard_Expanded_notification.classList.remove("green","red");
    FinalCard_Expanded_notification.classList.add("red");
    FinalCard_Expanded_notification.innerText="Discount Code Removed!";
    FinalCard_Expanded_notification.style.display="flex";
    setTimeout(() => {
        FinalCard_Expanded_notification.style.display="none";
    }, 1000);
    UpdateCart();
}

function finalfinalfinalbutton(){
    if(Object.keys(CartObject).length === 0){
        FinalCard_Expanded_notification.classList.remove("green","red");
        FinalCard_Expanded_notification.classList.add("red");
        FinalCard_Expanded_notification.innerText="Your cart is Empty. Add Something!";
        FinalCard_Expanded_notification.style.display="flex";
        setTimeout(() => {
            FinalCard_Expanded_notification.style.display="none";
        }, 2000);
    }
    else if(!LOGGEDIN){
        OpenRegisterForm();
    }
    else{
        FinalCard_Expanded_notification.classList.remove("green","red");
        FinalCard_Expanded_notification.classList.add("green");
        FinalCard_Expanded_notification.innerText="Hooray! Order Sucessfully Placed";
        FinalCard_Expanded_notification.style.display="flex";
        setTimeout(() => {
            FinalCard_Expanded_notification.style.display="none";
        }, 2000);
    }
}

let star1_review=document.querySelector(".star1_review");
let star2_review=document.querySelector(".star2_review");
let star3_review=document.querySelector(".star3_review");
let star4_review=document.querySelector(".star4_review");
let star5_review=document.querySelector(".star5_review");
let StarCount_flag=0;
let GiveUsReview_Notification=document.querySelector(".GiveUsReview_Notification");
let GiveUsReviewBackground=document.querySelector(".GiveUsReviewBackground");
let GiveUsReviewCard=document.querySelector(".GiveUsReviewCard");
let Reviewer_name=document.querySelector(".Reviewer_name");
let Review_of_user=document.querySelector(".Review_of_user");
function OpenreviewForm(){
    GiveUsReviewBackground.style.display="flex";
    GiveUsReviewCard.style.display="flex";
    document.body.style.overflow="hidden";

}
function ClosereviewForm(){
    Reviewer_name.value="";
    Review_of_user.value='';
    StarCount_flag=0;
    star1_review.classList.remove("selected");
    star2_review.classList.remove("selected");
    star3_review.classList.remove("selected");
    star4_review.classList.remove("selected");
    star5_review.classList.remove("selected");
    GiveUsReview_Notification.style.display="none";
    document.body.style.overflow="auto";
    GiveUsReviewBackground.style.display="none";
    GiveUsReviewCard.style.display="none";
}


function star1_reviewFUN(){
    star1_review.classList.add("selected");
    if(StarCount_flag==1){
        star1_review.classList.remove("selected");
        StarCount_flag=0;
    }else{
       star1_review.classList.add("selected");
       star2_review.classList.remove("selected");
       star3_review.classList.remove("selected");
       star4_review.classList.remove("selected");
       star5_review.classList.remove("selected");
       StarCount_flag=1; 
    }
}
function star2_reviewFUN(){
    star2_review.classList.add("selected");
    if(StarCount_flag==2){
        star2_review.classList.remove("selected");
        StarCount_flag=0;
    }else{
        star1_review.classList.remove("selected");
        star2_review.classList.add("selected");
        star3_review.classList.remove("selected");
        star4_review.classList.remove("selected");
        star5_review.classList.remove("selected");       
        StarCount_flag=2; 
    }

}
function star3_reviewFUN(){
    star3_review.classList.add("selected");
    if(StarCount_flag==3){
        star3_review.classList.remove("selected");
        StarCount_flag=0;
    }else{
        star1_review.classList.remove("selected");
        star2_review.classList.remove("selected");
        star3_review.classList.add("selected");
        star4_review.classList.remove("selected");
        star5_review.classList.remove("selected");       
        StarCount_flag=3; 
    }

}
function star4_reviewFUN(){
    star4_review.classList.add("selected");
    if(StarCount_flag==4){
        star4_review.classList.remove("selected");
        StarCount_flag=0;
    }else{
        star1_review.classList.remove("selected");
        star2_review.classList.remove("selected");
        star3_review.classList.remove("selected");
        star4_review.classList.add("selected");
        star5_review.classList.remove("selected");       
        StarCount_flag=4; 
    }

}
function star5_reviewFUN(){
    star5_review.classList.add("selected");
    if(StarCount_flag==5){
        star5_review.classList.remove("selected");
        StarCount_flag=0;
    }else{
        star1_review.classList.remove("selected");
        star2_review.classList.remove("selected");
        star3_review.classList.remove("selected");
        star4_review.classList.remove("selected");
        star5_review.classList.add("selected");       
        StarCount_flag=5; 
    }

}
let review2_name=document.querySelector(".review2_name");
let review2_ratings=document.querySelector(".review2_ratings");
let review2_text=document.querySelector(".review2_text");
function SubmitreviewForm(){
if(LOGGEDIN){
    let Reviewer_name_value= Reviewer_name.value.trim();
    let Review_of_user_value = Review_of_user.value.trim();
    if(!Reviewer_name_value==""){
        if(!StarCount_flag==0){
            if(!Review_of_user_value==""){
                review2_name.innerText=Reviewer_name_value;
                if(StarCount_flag==1){
                    review2_ratings.innerText=`⭐`;
                }
                else if(StarCount_flag==2){
                    review2_ratings.innerText="⭐⭐";
                }
                else if(StarCount_flag==3){
                    review2_ratings.innerText="⭐⭐⭐";
                }   
                else if(StarCount_flag==4){
                    review2_ratings.innerText="⭐⭐⭐⭐";
                }
                else if(StarCount_flag==5){
                    review2_ratings.innerText="⭐⭐⭐⭐⭐";
                }
                review2_text.innerText=Review_of_user_value;
                GiveUsReview_Notification.innerText="Review Sucessfully Submitted!!!";
                let User_logo_review_value= Reviewer_name_value.charAt(0).toUpperCase();
                document.querySelector(".User_logo_review").textContent=User_logo_review_value;
                GiveUsReview_Notification.style.display="block";
                setTimeout(() => {
                    ClosereviewForm();
                }, 1000);

            }
            else{
                GiveUsReview_Notification.innerText="Please Give a review!!!";
                GiveUsReview_Notification.style.display="block";
                setTimeout(() => {
                    GiveUsReview_Notification.style.display="none";
                }, 1000);
            }
        }
        else{
            GiveUsReview_Notification.innerText="Please Select a rating!!!";
            GiveUsReview_Notification.style.display="block";
            setTimeout(() => {
                GiveUsReview_Notification.style.display="none";
            }, 1000);
            }
    }
    else{
        GiveUsReview_Notification.innerText="Please Enter Your name!!!";
        GiveUsReview_Notification.style.display="block";
        setTimeout(() => {
            GiveUsReview_Notification.style.display="none";
        }, 1000);
    }     
    }
else{
    OpenRegisterForm();
}
}

function UpdateComplaintContact(){
    if(LOGGEDIN){
        document.querySelector(".Complaint_contact_info").style.display="flex";
        document.querySelector(".Complaint_contact_info_Email").innerText=Complaint_Email;
    }
    else{
        document.querySelector(".Complaint_contact_info").style.display="none";
        document.querySelector(".Complaint_contact_info_Email").innerText="";
    }
    
}
function OpenComplaintForm(){
    document.querySelector(".Complaint_card").style.display="flex";
    document.querySelector(".Complaint_background").style.display="flex";
    document.body.style.overflow='hidden';
    UpdateComplaintContact();
    
}
//this function is Not my code (chat GPT)
let file;
function GetComplaintImage(input) {
  file = input.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = e => document.querySelector('.Complaint_Image').src = e.target.result;
    document.querySelector(".Complaint_Image_div").style.display="block";
    reader.readAsDataURL(file);
  }
  
}
function Remove_Complaint_Image_func(){
    document.querySelector(".Complaint_Image_div").style.display="none";
    document.querySelector('.Complaint_Image').src = "";
    document.querySelector(".Complaint_Image_Input").value="";
}
let Complaint_input=document.querySelector(".Complaint_input");
function Cancel_Complaint(){
    Complaint_input.value="";
    Remove_Complaint_Image_func();
    document.querySelector(".Complaint_card").style.display="none";
    document.querySelector(".Complaint_background").style.display="none";
    document.body.style.overflow='auto';
}
function Accept_Complaint(){
    
    if(!Complaint_input.value){
        document.querySelector(".Complaint_notification").style.display="block";
        document.querySelector(".Complaint_notification").innerText="Describe your complaint.";
        setTimeout(() => {
            document.querySelector(".Complaint_notification").style.display="none";
        }, 1500);
        
    }
    else if(!LOGGEDIN){
        OpenRegisterForm();
    }
    else{
        document.querySelector(".Complaint_notification").style.display="block";
        document.querySelector(".Complaint_notification").innerText="Complaint Sucessfully Submitted.";
        setTimeout(() => {
            document.querySelector(".Complaint_notification").style.display="none";
            Cancel_Complaint();
        }, 1500);
    }
}
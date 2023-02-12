fetch("json/data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    var navhref = ["introduction","awards","teaching","research","news","publications","students","contacts"] 
    document.getElementById("nav_name").innerHTML = data.Name;
    
    for(var key in data.navbar_list){
        
        var new_element = document.createElement("li")
        new_element.setAttribute('class',"nav-item")
        var new_element_2 = document.createElement("a")
        new_element_2.setAttribute('class',"nav-link")
        new_element_2.classList.add("text-dark")
        new_element_2.setAttribute('href',"#"+navhref[key])
        new_element_2.innerHTML =data.navbar_list[key]
        new_element.append(new_element_2)
        document.getElementById("nav_list").appendChild(new_element);
        // var new_element_3 = document.createElement("div")
        // new_element_3.setAttribute("class","container-fluid")
        // new_element_3.classList.add("text-light")
        // new_element_3.setAttribute("id",data.navbar_list[key])
        // new_element_3.style.cssText="padding-top:100px;padding-bottom: 100px;"
        // document.body.appendChild(new_element_3)
    }
    document.getElementById("display_name").innerHTML = data.Name
    document.getElementById("designation").innerHTML= data.Designation
    document.getElementById("department").setAttribute("href",data.Department.url)
    document.getElementById("department").innerHTML= data.Department.Title
    document.getElementById("institute").setAttribute("href",data.Institute.url)
    document.getElementById("institute").innerHTML= data.Institute.Title
    document.getElementById("icon_email").setAttribute("href","mailto:"+data.Contacts.Email)
    document.getElementById("icon_scholar").setAttribute("href",data.Contacts.Google_scholar)
    document.getElementById("icon_linkedin").setAttribute("href",data.Contacts.Linkedin)
    document.getElementById("biography").innerHTML= data.Description.Title;
    document.getElementById("biography_content").innerHTML= data.Description.Description;
    document.getElementById("education_title").innerHTML=data.Education.Title
    for(var key in data.Education.List){
        var new_element =document.createElement("li")
        var new_element_2 = document.createElement("i")
        new_element_2.setAttribute("class","fa")
        new_element_2.classList.add("fa-graduation-cap")
        new_element_2.classList.add("fa-li")
        new_element_2.classList.add("fa-pull-left")
        new_element.appendChild(new_element_2);
        new_element.append(data.Education.List[key])
        document.getElementById("education_list").append(new_element)
    }
    document.getElementById("interest_title").innerHTML=data.Interest.Title
    for(var key in data.Interest.List){
        var new_element =document.createElement("li")
        new_element.innerHTML=data.Interest.List[key]
        document.getElementById("interest_list").append(new_element)
    }
    document.getElementById("awards_title").innerHTML=data.Awards.Title
    for(var key in data.Awards.List){
        var new_element= document.createElement("div")
        new_element.setAttribute("class","card")
        new_element.classList.add("bg-dark")
        new_element_2 = document.createElement("div")
        new_element_2.setAttribute("class","card-body")
        new_element_2.innerHTML = "<h5 class=card-title>"+data.Awards.List[key].Title+"</h5><p class=card-text>"+data.Awards.List[key].Description+"</p>"
        new_element.append(new_element_2)
        document.getElementById("awards_list").appendChild(new_element)
    }
    document.getElementById("teaching_id").innerHTML=data.Teaching.Title
    for(var key in data.Teaching.List){
        var element = document.createElement("div")
        element.setAttribute("class","card")
        element.classList.add("bg-secondary")
        var element_1 = document.createElement("div")
        element_1.setAttribute("class","card-body")
        var new_element = document.createElement("h5")
        new_element.setAttribute("class","card-title")
        new_element.innerHTML=data.Teaching.List[key].Title
        var new_element_2 = document.createElement("p")
        new_element_2.setAttribute("class","card-text")
        var new_element_3 = document.createElement("ul")
        for(var key1 in data.Teaching.List[key].List){
            var new_element_4 = document.createElement("li")
            new_element_4.innerHTML = data.Teaching.List[key].List[key1]
            new_element_3.appendChild(new_element_4)
        }
        new_element_2.appendChild(new_element_3)
        element_1.appendChild(new_element)
        element_1.appendChild(new_element_2)
        element.appendChild(element_1)
        document.getElementById("course_list").appendChild(element)
    }
    document.getElementById("publication_title").innerHTML= data.Publications.Title
    for(var key in data.Publications.List){
        var new_element = document.createElement("div")
        new_element.setAttribute("class","card")
        new_element.classList.add("bg-dark")
        var new_element_2 = document.createElement("div")
        new_element_2.setAttribute("class","card-body")
        var new_element_3 = document.createElement("h5")
        new_element_3.setAttribute("class","card-title")
        new_element_3.append(data.Publications.List[key].Title)
        var new_element_4 = document.createElement("a")
        new_element_4.setAttribute("target","_blank")
        new_element_4.setAttribute("href",data.Publications.List[key].url)
        var new_element_5 = document.createElement("i")
        new_element_5.setAttribute("class","fa")
        new_element_5.classList.add("fa-external-link")
        new_element_5.setAttribute("style","color:red;")
        new_element_4.appendChild(new_element_5)
        new_element_3.appendChild(new_element_4)
        var new_element_6 = document.createElement("p")
        new_element_6.setAttribute("class","card-text")
        new_element_6.innerHTML=data.Publications.List[key].Description
        new_element_2.appendChild(new_element_3)
        new_element_2.appendChild(new_element_6)
        new_element.appendChild(new_element_2)
        document.getElementById("publication_list").append(new_element)
    }
    document.getElementById("research_title").innerHTML = data.Research.Title
    for(var key in data.Research.List){
        var new_element = document.createElement("div")
        new_element.setAttribute("style","padding-bottom:30px;")
        var new_element_2 = document.createElement("div")
        new_element_2.setAttribute("class","card")
        new_element_2.classList.add("bg-dark")
        var new_element_3 = document.createElement("div")
        new_element_3.setAttribute("class","card-body")
        var new_element_4 = document.createElement("h5")
        new_element_4.setAttribute("class","card-title")
        new_element_4.innerHTML = data.Research.List[key].Title
        new_element_3.appendChild(new_element_4)
        new_element_2.appendChild(new_element_3)
        new_element.appendChild(new_element_2)
        for(var key1 in data.Research.List[key].List){
            var new_element_2 = document.createElement("div")
            new_element_2.setAttribute("class","card")
            new_element_2.classList.add("bg-dark")
            var new_element_3 = document.createElement("div")
            new_element_3.setAttribute("class","card-body")
            var new_element_4 = document.createElement("h5")
            new_element_4.setAttribute("class","card-title")
            new_element_4.innerHTML = data.Research.List[key].List[key1].Title
            var new_element_5 = document.createElement("p")
            new_element_5.setAttribute("class","card-text")
            new_element_5.innerHTML=data.Research.List[key].List[key1].Description
            new_element_3.appendChild(new_element_4)
            new_element_3.appendChild(new_element_5)
            new_element_2.appendChild(new_element_3)
            new_element.appendChild(new_element_2)
            document.getElementById("research_list").appendChild(new_element)
        }
    }
    document.getElementById("conference").innerHTML=data.Conference.Title
    for(var key in data.Conference.List){
        var new_element = document.createElement("div")
        new_element.setAttribute("style","padding-bottom:30px;")
        var new_element_2 = document.createElement("div")
        new_element_2.setAttribute("class","card")
        new_element_2.classList.add("bg-secondary")
        var new_element_3 = document.createElement("div")
        new_element_3.setAttribute("class","card-body")
        var new_element_4 = document.createElement("h5")
        new_element_4.setAttribute("class","card-title")
        new_element_4.innerHTML = data.Conference.List[key].Title
        var new_element_5 = document.createElement("hr")
        new_element_5.setAttribute("class","theme-white")
        var new_element_6 = document.createElement("p");
        new_element_6.setAttribute("class","card-text")
        var new_element_7 = document.createElement("ul");
        new_element_7.setAttribute("style","line-height: 1.6;")
        for(var key1 in data.Conference.List[key].List){
            var new_element_8 = document.createElement("li")
            new_element_8.innerHTML=data.Conference.List[key].List[key1]
            new_element_7.appendChild(new_element_8)
        }
        new_element_6.appendChild(new_element_7)
        new_element_3.appendChild(new_element_4)
        new_element_3.appendChild(new_element_5)
        new_element_3.appendChild(new_element_6)
        new_element_2.appendChild(new_element_3)
        new_element.appendChild(new_element_2)
        document.getElementById("conference_list").appendChild(new_element)
    }
    document.getElementById("students_title").innerHTML=data.Students.Title
    for(var key in data.Students.List){
        var new_element = document.createElement("div")
        new_element.setAttribute("style","padding-bottom:30px;")
        var new_element_2 = document.createElement("h5")
        new_element_2.setAttribute("class","card-title")
        new_element_2.innerHTML = data.Students.List[key].Title
        var new_element_3 = document.createElement("hr")
        new_element_3.setAttribute("class","theme-white")
        new_element.appendChild(new_element_2)
        new_element.appendChild(new_element_3)
        for(key1 in data.Students.List[key].List){
            var new_element_4 = document.createElement("div")
            new_element_4.setAttribute("class","row")
            var new_element_5 = document.createElement("div")
            new_element_5.setAttribute("class","col-md-3")
            var new_element_6 = document.createElement("div")
            new_element_6.setAttribute("class","card")
            new_element_6.setAttribute("style","width:150px")
            var new_element_7 = document.createElement("img")
            new_element_7.setAttribute("class", "rounded")
            new_element_7.classList.add("mx-auto")
            new_element_7.classList.add("d-block")
            new_element_7.classList.add("img-fluid")
            new_element_7.setAttribute("src",data.Students.List[key].List[key1].img_src)
            new_element_7.setAttribute("alt",data.Students.List[key].List[key1].Name)
            var new_element_8 = document.createElement("div")
            new_element_8.setAttribute("class","col-md-9")
            new_element_8.innerHTML="<p><b>"+data.Students.List[key].List[key1].Name+"</b>&emsp;("+data.Students.List[key].List[key1].Contact+")</p><p class=text-justify>"+data.Students.List[key].List[key1].Description+"</p>"
            new_element_6.appendChild(new_element_7)
            new_element_5.appendChild(new_element_6)
            new_element_4.appendChild(new_element_5)
            new_element_4.appendChild(new_element_8)
            var new_element_9 = document.createElement("hr")
            new_element_9.setAttribute("class","theme-white")
            new_element.appendChild(new_element_4)
            new_element.appendChild(new_element_9)
        }
        document.getElementById("students_list").appendChild(new_element)
    }
    document.getElementById("past_students_title").innerHTML=data.Students.Past_Student_List.Title
    for(var key in data.Students.Past_Student_List.List){
        var new_element = document.createElement("tr")
        var new_element_2 = document.createElement("td")
        new_element_2.innerHTML=data.Students.Past_Student_List.List[key].Name
        var new_element_3 = document.createElement("td")
        new_element_3.innerHTML=data.Students.Past_Student_List.List[key].Contact
        var new_element_4 = document.createElement("td")
        new_element_4.innerHTML=data.Students.Past_Student_List.List[key].Description
        new_element.appendChild(new_element_2)
        new_element.appendChild(new_element_3)
        new_element.appendChild(new_element_4)
        document.getElementById("past_students_list").appendChild(new_element)
    }
    var new_element = document.createElement("a")
    new_element.setAttribute("class","text-decoration-none")
    new_element.setAttribute("href","mailto:"+data.Contacts.Email)
    new_element.innerHTML=data.Contacts.Email
    document.getElementById("contact_email").appendChild(new_element)
    
    for(var key in data.Contacts.Contact){
        var new_element = document.createElement("div")
        new_element.setAttribute("class","col-sm-6")
        new_element.innerHTML = data.Contacts.Contact[key].Title+":<a class=text-decoration-none href=tel:"+data.Contacts.Contact[key].Description+">"+data.Contacts.Contact[key].Description+"</a>"
        document.getElementById("contact_list").appendChild(new_element)
    }
    for(var key in data.Contacts.Address){
        var new_element = document.createElement("div")
        new_element.setAttribute("class","col-sm-6")
        new_element.innerHTML = data.Contacts.Address[key].Title+": "+data.Contacts.Address[key].Description
        document.getElementById("address_list").appendChild(new_element)
    }
    console.log(data);
  })

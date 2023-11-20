class Employee{
    Constructor(fname,lname,EID,salarypm,designation,department,
        contactNo,personalEmail,workEmail,dateOfBirth,age,address,city,country)
        {
            this.firstName=fname
            this.lastName=lname
            this.employeeID=EID
            this.salaryPerMonth=salarypm
            this.designation=designation
            this.department=department
            this.contactNumber=contactNo
            this.personalEmail=personalEmail
            this.workEmail=workEmail
            this.dateOfBirth=dateOfBirth
            this.age=age
            this.address=address
            this.city=city
            this.country=country
        }

        static newEmployee(fname, lname, EID, salarypm, designation, department, dateOfjoining, dateOfresignation, contactNo, Email, dob, city, country, reportingofficer, subordinates){ 
            if(typeof fname != 'string'){ 
                return["Failure in fname"] 
            } 
            if(typeof lname != 'string'){ 
                return["Failure in lname"] 
            } 
            if(typeof EID != 'number'){ 
                return["Failure in ID"] 
            } 
            if(typeof salarypm != 'number'){ 
                return["Failure in salary"] 
            } 
            if(typeof designation != 'string'){ 
                return["Failure in designation"] 
            } 
            if(typeof department != 'string'){ 
                return["Failure in department"] 
            } 
            if(typeof dateOfjoining != 'string'){ 
                return["Failure in DOI"] 
            } 
            if(typeof dateOfresignation != 'string'){ 
                return["Failure in DOR"] 
            } 
            if(typeof city != 'string'){ 
                return["Failure in City"] 
            } 
            if(typeof country != 'string'){ 
                return["Failure in Country"] 
            } 
            if(typeof reportingofficer != 'string'){ 
                return["Failure in Officer"] 
            } 
            if(typeof subordinates != "object"){ 
                return["Failure in subordinates Array"] 

        }
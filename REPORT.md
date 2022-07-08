# Introduction :art: 
## What are you building?

- We are building an app that brings spirits up for people (everyone and anyone) that feel down and concerned with troubles.
- This will also give the user a journal to express and recapture moments privately.
- This comes down to art is therapy, where people can upload art which reflects there mood.
- Users will also be able to upload art from weekly prompts.
- General chat page to reflect there issues and concerns to likeminded people, helping one another.

## Why are you building it?

- To bring awareness for individuals who need uplifting.
- who wish to take part in a new art hobby.
- expressing there mood in a safe place.

# Project scope 
## What are you not building?
- We are not building an application where users can directly create art on the app. Users are prompted to created artwork and then upload their work to the feed.
## How did you decide what features were important?
- We took into consideration the purpose of the app and how we wanted to benefit users. This clarified which features of the app users would mostly interact with and were integral features required to distinguish our application from others. These are the aspects we will prioritise.

# Project plan 
## How are you going to structure your sprints?

- First week we'll be focusing on the functionality of the app;
- Second week we'll be filling the gaps, coninue with user authentication, add more details and begin working on the user interface to improve the user experience.;

## What order are you going to build in?

- We will prioritize the upload of the images as we think it's the main feature of our app 
- Then we'll do signup/login pages with authentication 

## How did user research inform your plan?

The research was really usefull as it helped us to undestand which feautures of the app are interesting and approved by our users and which one we'll still to refine.

# Requirement analysis 

## How will you ensure your project is accessible to as many users as possible?

- HTML semantic elements
- Aria labels
- Lighthouse accesibility report
- Usability tests

## Are there any legal or regulatory requirements you should consider?

- Moderation of comments (and group chats)
- Storage of personal data

# Project learnings 

## Did your team work effectively?

- Our team organised ourselves well so that everyone had a project role with identifiable action points and responsibilities. We also created a prject board to keep track of open, in-progress and closed issues. By utilising Github's 'labels', we were able to further organise our issues and identify which elements or pages of the app they belonged to. 
- We therefore were able to 'divide and conquer' and maintain track of the progression of the project. 
- We pair-programmed for some of the project and used live-share so that multiple people could work on the same file. This was helpful when debugging and helping each other when we got stuck on an issue.
- We made the most out of platforms such as Miro, hackMD, Google Docs and Figma to work collaboratively during our reearch and design sprints. This kept our notes organised and our visons aligned. It also meant our cals and meetings ran smoother as any errors were recognised quickly (more eyes on the documents). 

## What would you do differently next time?
- In hindsight, we should have been started to do the testing earlier - particularly as we planned on using a new testing library that we were unfamiliar with (Jest). In the end, we switched testing libraries due to time constraints so this is something to keep in mind for future projects.

# Research and findings 

* What did you find out from user testing?
 The users could easily navigate between pages and understood the menu bar. Understanding of certain pages were not clear in all cases, therefore we acknowkedged the feedbacks and reviewed the plans and modified the prototype.

# Project outcomes 

## Were your assumptions right or wrong?
User and usability tests:
- Some of our assumptions were correct. For example, we expected users to mostly access the internet via their phones and this was in line with our user research. 

# Software Development Lifecycle stages 
1. Planning
2. Analysis
3. Design
4. Development
5. Testing
6. Integration
7. Maintenance

## Planning 

### What roles did your team take on?
 
Explain the roles and responsibilities of all people working within the software development lifecycle, and how they relate to the project (K2)

- Asmahan: Scrum Facilitator;
    - Led conversations with the product owner (Peter Salter) and the rest of the team. Supported the team with prioritising issues and sprint planning as well as maintaining a balance between time spent on the projet and breaks away from the screen. 

- Hallie: QA;
    - Created a repo and set up the file structure, prioritising modularistion from the beginning of the project. Took charge of setting/configuring up the Cypress testing library and wrote tests for the code.

- Peter: UX/UI Lead;
    - Checked on accessibility, maintained initial design layout, set up and use Styling-components to add vanilla CSS. Logo created.

- Petra: QA;
    - Supported the team with debugging and took the lead on maintaining clean and legible code across all files.

* Did these roles help your team work effectively?
 
Outline how teams work effectively to produce software and how to contribute appropriately (K6) Compare and contrast the requirements of a software development team, and how they would ensure that each member (including themselves) were able to make a contribution (K6)

## Analysis 
* What might be the intended and unintended consequences of building this product?
- An intended consequence is that users can navigate the app easily and are left feeling better thna when they joined.

## Design 

#### How did you plan a user experience?

- We planned an approximate design of the app using the Miro board;
- Continued to design a prototype of the app with Figma;
- We had a several usability testing sessions with at least 8 people to ensure our design will work(or not);
- We wrote the user stories based on our assumptions and wishes of our potential users;

#### What technical decisions did you make?

Decisions on the tech stack:
- React as Javascript Framework
- Next Js as React Framework
- Supabase as cloud-hosted relational databse
- Cypress as testing utility for React
- Vercel as serverless host
- Styled Components for styling.


# Did you create a technical specification?
Review methods of software design with reference to functional/technical specifications and apply a justified approach to software development (K11, S11, S12)

## Implementation/Build 

* How did you ensure your code was good?
Create logical and maintainable code to deliver project outcomes, explaining their choice of approach. (S1)

* What interesting technical problems did you have to solve?
Outline and apply the rationale and use of algorithms, logic and data structures. (K9, S16)

* How did you debug issues that arose?
Apply structured techniques to problem solving to identify and resolve issues and debug basic flaws in code (S7)
1. Read the error first;
2. Console.log() the issue;
3. Use a debugging tool if needed;
4. Change the code and console.log() it again.

## Test 
* How did you verify your project worked correctly?

1.  We tested our logic with several tests with Cypress testing library to ensure is working correctly.
// (/signup page)
// describe('Signup page', () => {
//   it('allows users to sign up and redirects to login page', () => {
//     cy.visit('http://localhost:3000/signup')
//     cy.get('p').should('contain', 'Signup')
//     cy.get('input[name="emailinput"]').type('testuser@123.com')
//     cy.get('input[name="passwordinput"]').type('Password123')
//     cy.get('button').click()
//     cy.visit('http://localhost:3000/login')
//     });
// })

2. Reading errors in terminal and browser and console.log() the errors helped a lot as well.

## Deploy 

###### Where/how did you deploy your application?
- We decided to deploy our application using Vercel. After careful research and comparisment we chose Vercel as it best pairing with Next.js we are using and also didn't cause us any problems before in our previous projects.

- Setting up our database in Supabase and configuring the environment variables helped us to successfully deploy the app to Vercel.

- Review and justify their contribution to building, managing and deploying code into the relevant environment in accordance with the project specification (S10)

###### What problems did you encounter during deployment?

- We had issues with the Supabase configuration hence we could not deploy the app to Vercel for the first time. Fixing the environment variables and integrating Supabase to Vercek solved the issue.

## Maintain 
###### Is it easy for someone make changes to the codebase?

- The remote main branch is up to date, which makes it easier to pull the most recent changes and keep working on the codebase. 
- We review the pull requests together, and after everyone's approval, we merge them into the main branch. This process helps us to work on separate branches and make different changes. 


## Could a new person quickly be onboarded to contribute?

- We use clear and relatable expressions while defining file, component, function or variable names, which help to understand the code easier.

# Recommendations and conclusions 
## What features would you prioritise to build next?
   - We will firstly prioritise Social auth with supabase with authentication on github, we found that using github was more beneficial than using google because google only allows you with a 90 days free trial.
   - Settings page which allows the user to change there username, email or password.
   - Gallery page which displays each prompted art in a gallery view, when you click on this it will direct and display a inspiring card message to cheer and bring out peoples spirits.
   - community live chat page which will allow users to chat with other users about there feelings or concerns.
   - comments on arts thread so that people can express there feelings on the art piece.
   - Testing with jest for all the functionality with enzyme.
   - continue by using style-components for styling each page and checking for accessibility.
   
## Was the project a success?

- As a whole We feel that as a team we got a lot of features completed.
- We had to make the tough decision on accepting that there was not enough time to complete the community chat feature, although this was the case we all suggested to keep working on this feature at a later date because we learnt so much from this and got so close :sparkles: 
- We did not get enough time for the testing, there was some trouble with Jest and Supabase conflicting, so the team went with Cypress testing, this is another task that the team said would like to complete in the near future.
- All in all this project has been a success, pair programming with the team, very organised and structured. 
- The priority is to learn and we feel that we succeeded in this, and we have learnt and progressed so much, finishing this application in two weeks was impressive.

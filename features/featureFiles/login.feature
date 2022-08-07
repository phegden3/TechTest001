Feature: Automation Practice Dummy Website Login Functionality
  
  Background: Launch the application URL and navigate to Authentication Page
    Given I launch the application url
    And I navigate to Authentication page

  Scenario Outline: As a user, I can login to the automationpractice website with <email> email id
    When I login with <email> and <password>
    Then I should see My Account page
    And I logout from the applicaiton

    Examples:
      | email                | password  |
      | 196o5fmoic@goesg.com | Passw0rd! |
      | ojs6tssega@piihy.com | Passw0rd! |
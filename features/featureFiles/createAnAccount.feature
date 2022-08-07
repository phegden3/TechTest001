Feature: Automation Practice Dummy Website Create An Account Functionality

  Scenario: As a user, I can Create An Account
    Given I launch the application url
    When I navigate to Authentication page
    Then I create a new account
    When I login with the newly created account credentials
    Then I should see My Account page
    And I logout from the applicaiton

  Scenario Outline: As a user, I can Create An Account for each gender
    Given I launch the application url
    When I navigate to Authentication page
    Then I create a new account with below criteria
      | gender |
      | male   |
      | female |
    And I verify login functionality with the newly created account credentials for below criteria
      | gender |
      | male   |
      | female |
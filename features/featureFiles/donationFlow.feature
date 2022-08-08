Feature: Donation flow on cruk donation application functionality

  Scenario: As a user, I will perform donation
    Given I Launch cruk donation application
    When Donation details entered on donation page
    And Details data entered in details page
    And Card payment completed
    Then Thank you page must be displayed with success message
#    And Donation Reference Id should match with API output

Scenario: Visit group dashboard
    When I visit group with ID 7
    Then I see the attendance button

Scenario: Open mark attendance
    When I visit group with ID 7
    And I click the attendance button
    Then I see the attendance view
    And The Day View button is highlighted

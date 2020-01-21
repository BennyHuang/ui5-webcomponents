const daypicker = require("../pageobjects/DayPickerTestPage");
const assert = require("chai").assert;

describe("Day Picker Tests", () => {
	browser.url("http://localhost:8080/test-resources/pages/DayPicker.html");
	browser.pause(100);

	beforeEach(() => {
		browser.execute(() => {
			document.getElementById("daypicker").openPicker();
		});
	});

	it("Day Picker Renders", () => {
		daypicker.id = "daypicker";
		const DayPicker = daypicker.dayPickerRoot;

		assert.ok(DayPicker, "Day Picker is rendered");
	});

	it("Select day with Space", () => {
		browser.keys("Space"); // The initial focus is on th current date

		assert.isOk(daypicker.currentDate, new Date().getDate(), "Dates are equal");
	});

	it("Select day with Enter", () => {
		daypicker.id = "daypicker1";
		browser.keys("Enter"); // The initial focus is on th current date

		assert.strictEqual(daypicker.currentDate, new Date(Date.now()).getDate(), "Dates are equal"); // Tomorrow should be selected
	});
});

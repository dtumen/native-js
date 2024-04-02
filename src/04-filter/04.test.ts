test('should take old men older then 90', () => {
	const ages = [18, 20, 22, 24, 1, 100, 90, 14];

	const oldAges = ages.filter((age) => age > 90);

	expect(oldAges.length).toBe(1);
	expect(oldAges[0]).toBe(100);
});

test('should take courses chipper 160$', () => {
	const courses = [
		{ title: 'CSS', price: 160 },
		{ title: 'JS', price: 200 },
		{ title: 'React', price: 150 },
	];

	const chipCourses = courses.filter((course) => course.price < 170);

	expect(chipCourses.length).toBe(2);
	expect(chipCourses[0].price).toBe(160);
	expect(chipCourses[0].title).toBe('CSS');
});

test('get only completed tasks', () => {
	const tasks = [
		{ id: 1, title: 'Bread', isDone: false },
		{ id: 2, title: 'Salt', isDone: true },
		{ id: 3, title: 'Milk', isDone: false },
		{ id: 4, title: 'Eggs', isDone: true },
	];

  const completedTasks = tasks.filter(task => task.isDone)

  expect(completedTasks.length).toBe(2);
  expect(completedTasks[0].title).toBe('Salt');
  expect(completedTasks[1].title).not.toBe('Milk');
});

test('get only uncompleted tasks', () => {
	const tasks = [
		{ id: 1, title: 'Bread', isDone: false },
		{ id: 2, title: 'Salt', isDone: true },
		{ id: 3, title: 'Milk', isDone: false },
		{ id: 4, title: 'Eggs', isDone: true },
	];

  const completedTasks = tasks.filter(task => !task.isDone)

  expect(completedTasks.length).toBe(2);
  expect(completedTasks[0].title).toBe('Bread');
  expect(completedTasks[1].title).not.toBe('Eggs');
});
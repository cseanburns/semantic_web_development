<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width", initial-scale="1.0">
		<title>PHP Demo Page</title>
	</head>

	<body>

<p>Today is <?php echo date("l"); ?>
<p>Today's full date is <?php echo date(DATE_RFC2822); ?></p>


<p>Hi <?php echo "<b>" . $_POST['name'] . "</b>"; ?>.</p>

<p>You are <?php echo "<em>" . $_POST['age'] . "</em>"; ?> years old.</p>

<p>You can be reached at <?php echo "<del>" . $_POST['email'] . "</del>"; ?>.</p>

<p><b>You are sending the following user agent info:</b><br>
<?php
	echo $_SERVER['HTTP_USER_AGENT'];

	$mybrower = get_browser();
	print_r($mybrowser);
?>
</p>

	</body>
</html>

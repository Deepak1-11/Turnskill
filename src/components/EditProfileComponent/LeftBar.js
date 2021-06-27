function LeftBar() {
	return (
		<div>

			<div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
				<a class="nav-link" data-toggle="pill" href="#" role="tab" aria-selected="false">

					Dashboard
				</a>
				<a class="nav-link" data-toggle="pill" href="#" role="tab" aria-selected="false">

					Live Sessions
				</a>
				<a class="nav-link" data-toggle="pill" href="#" role="tab" aria-selected="false">

					My Courses
				</a>
				<a class="nav-link" data-toggle="pill" href="#" role="tab" aria-selected="false">

					1-1 Sessions
				</a>
				<a class="nav-link active" data-toggle="pill" href="#" role="tab" aria-selected="true">

					User Settings
				</a>
				<a class="nav-link" data-toggle="pill" href="#" role="tab" aria-selected="false">

					Feedbacks
				</a>
			</div>
		</div>
	);
}

export default LeftBar;
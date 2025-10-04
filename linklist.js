insertAt(element, index)
{
	if (index < 0 || index > this.size)
		return console.log("Please enter a valid index.");
	else {
		var node = new Node(element);
		var curr, prev;

		curr = this.head;

		if (index == 0) {
			node.next = this.head;
			this.head = node;
		} else {
			curr = this.head;
			var it = 0;

			while (it < index) {
				it++;
				prev = curr;
				curr = curr.next;
			}

			node.next = curr;
			prev.next = node;
		}
		this.size++;
	}
}

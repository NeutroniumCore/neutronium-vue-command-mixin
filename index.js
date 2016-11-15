const commandMixin = {
	props: {
		command: {
			type: Object,
			required: true
		},
		arg: {
			type: Object,
			default: null
		}
    },
    computed: {
		canExecute: function () {
			if (this.command === null)
				return false;
			return this.command.CanExecuteValue;
		}
	},
	watch: {
		'command.CanExecuteCount': function () {
			this.computeCanExecute();
		},
		arg: function () {
			this.computeCanExecute();
		}
	},
	methods: {
		computeCanExecute: function () {
			if (this.command !== null)
				this.command.CanExecute(this.arg);
		},
		execute: function () {
			if (this.canExecute) {
				var beforeCb = this.beforeCommand;
				if (!!beforeCb)
					beforeCb();
				this.command.Execute(this.arg);
			}
		}
	}
  };

  export default commandMixin
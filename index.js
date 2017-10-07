const commandMixin = {
	props: {
		command: {
			required: true,
			validator: function (value) {
				return typeof value === 'object'
			}
		},
		arg: {
			type: Object,
			required: false,
			default: null
		}
	},
	computed: {
		canExecute: function () {
			if (this.command === null)
				return false;
			return !this.command.hasOwnProperty('CanExecuteValue') || this.command.CanExecuteValue;
		}
	},
	watch: {
		'command.CanExecuteCount': function () {
			!this.computeCanExecute || this.computeCanExecute();
		},
		arg: function () {
			!this.computeCanExecute || this.computeCanExecute();
		}
	},
	methods: {
		computeCanExecute: function () {
			if (this.command !== null)
				this.command.CanExecute(this.arg);
		},
		execute: function () {
			if (!this.canExecute) {
				return
			}
			const arg = this.arg
			const evt = {arg: arg, cancel: false}
			this.$emit('beforeExecute', evt)

			if (evt.cancel) {
				return
			}
			this.command.Execute(arg);
			this.$emit('afterExecute', arg)
		}
	}
};

export default commandMixin
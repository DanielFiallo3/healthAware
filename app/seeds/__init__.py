from flask.cli import AppGroup
from .users import seed_users, undo_users
from .allergies import seed_allergies, undo_allergies
from .user_allergies import seed_user_allergies, undo_user_allergies

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_allergies()
    seed_user_allergies()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_allergies()
    undo_user_allergies()
    # Add other undo functions here

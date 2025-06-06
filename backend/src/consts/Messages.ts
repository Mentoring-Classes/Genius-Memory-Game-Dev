export const RANK_MESSAGES = {
    RANK_SAVED_SUCCESSFULLY: 'Rank saved successfully',
    ERROR_SAVING_RANK: 'Error saving rank',
    RANK_NOT_FOUND: 'Rank not found',
    RANK_ALREADY_EXISTS: (rank: string) => `Rank ${rank} already exists`,
    RANK_UPDATED_SUCCESSFULLY: 'Rank updated successfully',
    ERROR_UPDATING_RANK: 'Error updating rank',
    ERROR_FETCHING_RANK: 'Error fetching rank',
    ERROR_DELETING_RANK: 'Error deleting rank',
    RANK_DELETED_SUCCESSFULLY: 'Rank deleted successfully',
    RANK_NO_UPDATE_NEEDED: 'No update needed',
}

export const USER_MESSAGES = {
    EMAIL_ALREADY_EXISTS: 'Email already exists',
    EMAIL_AND_PASSWORD_AND_USERNAME_REQUIRED: 'Email, password, and user name are required',
    USER_SAVED_SUCCESSFULLY: 'User saved successfully',
    ERROR_SAVING_USER: 'Error saving user',
    USER_NOT_FOUND: 'User not found',
    ERROR_UPDATING_USER: 'Error updating user',
    USER_UPDATED_SUCCESSFULLY: 'User updated successfully',
    USER_DELETED_SUCCESSFULLY: 'User deleted successfully',
    ERROR_DELETING_USER: 'Error deleting user',
}

export const COOP_ROOM_MESSAGES = {
    ROOM_ALREADY_EXISTS: 'Room already exists',
    ROOM_SAVED_SUCCESSFULLY: 'Room saved successfully',
    ERROR_SAVING_ROOM: 'Error saving Room',
    ROOM_NAME_REQUIRED: 'Room name are required',
    ROOM_NOT_FOUND: 'Room not found',
    ROOM_ALREADY_FULL: 'Room is already full',
    JOIN_ROOM_SUCCESS: 'Joined room successfully',
    ERROR_JOINING_ROOM: 'Error joining room',
}